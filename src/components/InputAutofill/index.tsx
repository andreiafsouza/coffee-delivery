import { useState, useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export type PlacesServiceStatus =
  | "INVALID_REQUEST"
  | "NOT_FOUND"
  | "OK"
  | "OVER_QUERY_LIMIT"
  | "REQUEST_DENIED"
  | "UNKNOWN_ERROR"
  | "ZERO_RESULTS";

export type Prediction = {
  description: string;
  place_id: string;
};

export type PlaceDetail = {
  formatted_address?: string;
  address_components: object[];
  geometry?: {
    location: { lat: () => number; lng: () => number };
  };
  name: string;
  place_id?: string;
};

type GoogleApiClient = {
  maps: {
    places: {
      AutocompleteSessionToken: { new (): string };
      AutocompleteService: {
        new (): {
          getPlacePredictions: (
            params: {
              input: string;
              sessionToken: string | undefined;
              componentRestrictions?: object;
              types: string[];
              limit: number;
            },
            callback: (
              predictions: Prediction[],
              status: PlacesServiceStatus
            ) => void
          ) => void;
        };
      };
      PlacesService: {
        new (attributionNode: HTMLElement): {
          getDetails: (
            params: {
              placeId: string;
              fields?: string[];
              sessionToken: string | undefined;
            },
            callback: (place: PlaceDetail, status: PlacesServiceStatus) => void
          ) => void;
        };
      };
      PlacesServiceStatus: {
        [key in PlacesServiceStatus]: PlacesServiceStatus;
      };
    };
    [key: string]: any;
  };
};

interface AddressComponent {
  long_name: string;
  types: string[];
}

async function getGoogleMapsApiClient(): Promise<GoogleApiClient> {
  const loader = new Loader({
    apiKey: import.meta.env.VITE_REACT_APP_MAPS_API_KEY || "",
    version: "weekly",
    libraries: ["places"],
  });
  const googleApiClient = (await loader.load()) as unknown as GoogleApiClient;
  return googleApiClient;
}

function useInputAutofill() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<Prediction[]>([]);
  const [placeDetail, setPlaceDetail] = useState<PlaceDetail>();

  const sessionTokenRef = useRef<string | undefined>();

  const timeoutRef = useRef<number | undefined>();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!newValue || newValue.trim().length <= 3) {
      setSuggestions([]);
      return;
    }

    timeoutRef.current = setTimeout(async () => {
      const google = await getGoogleMapsApiClient();

      if (!sessionTokenRef.current) {
        sessionTokenRef.current =
          new google.maps.places.AutocompleteSessionToken();
      }

      new google.maps.places.AutocompleteService().getPlacePredictions(
        {
          input: newValue,
          sessionToken: sessionTokenRef.current,
          componentRestrictions: { country: "BR" },
          types: ["address"],
          limit: 2,
        },
        (predictions: Prediction[], status: PlacesServiceStatus) => {
          if (status === "ZERO_RESULTS") {
            setSuggestions([]);
            return;
          }
          if (status !== "OK" || !predictions) {
            alert(status);
            return;
          }
          setSuggestions(predictions);
        }
      );
    }, 350);
  };

  const handleSuggestionSelected = async (
    suggestion: Prediction,
    inputFor: string
  ) => {
    setSuggestions([]);

    const google = await getGoogleMapsApiClient();

    const sessionToken = sessionTokenRef.current;
    sessionTokenRef.current = undefined;

    new google.maps.places.PlacesService(
      document.getElementById("googlemaps-attribution-container")!
    ).getDetails(
      {
        placeId: suggestion.place_id,
        fields: [
          "formatted_address",
          "name",
          "place_id",
          "geometry.location",
          "address_components",
          "utc_offset_minutes",
        ],
        sessionToken,
      },
      (place: PlaceDetail, status: PlacesServiceStatus) => {
        if (status === "OK") {
          setPlaceDetail(place);
          /* const addressComponents =
            place.address_components as AddressComponent[];
          addressComponents.forEach((obj) => {
            if (obj.types.includes(inputFor)) {
              setValue(addressComponents[0].long_name);
            }
          }); */
        }
      }
    );
  };

  return {
    value,
    suggestions,
    placeDetail,
    handleChange,
    handleSuggestionSelected,
    setSuggestions,
  };
}

export default useInputAutofill;
