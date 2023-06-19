import React, { useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import * as S from "./styles";

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
  // fields here depend on the fields param passed to getDetails
  formatted_address?: string;
  geometry?: {
    location: { lat: () => number; lng: () => number };
  };
  name?: string;
  place_id?: string;
};

type GoogleApiClient = {
  maps: {
    places: {
      AutocompleteSessionToken: { new (): string };
      AutocompleteService: {
        new (): {
          getPlacePredictions: (
            params: { input: string; sessionToken: string | undefined },
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

let googleApiClient: GoogleApiClient | undefined;

async function getGoogleMapsApiClient(): Promise<GoogleApiClient> {
  if (googleApiClient) {
    return googleApiClient;
  }
  const loader = new Loader({
    apiKey: import.meta.env.VITE_REACT_APP_MAPS_API_KEY || "",
    version: "weekly",
    libraries: ["places"],
  });
  googleApiClient = (await loader.load()) as unknown as GoogleApiClient;
  return googleApiClient;
}

function InputAutofill() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<Prediction[]>([]);
  const [placeDetail, setPlaceDetail] = useState<PlaceDetail>();

  const sessionTokenRef = useRef<string | undefined>();

  const timeoutRef = useRef<number | undefined>();
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
        },
        (predictions: Prediction[], status: PlacesServiceStatus) => {
          console.log(predictions, status);
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

  const handleSuggestionSelected = async (suggestion: Prediction) => {
    setValue(suggestion.description);
    setSuggestions([]);

    const google = await getGoogleMapsApiClient();

    const sessionToken = sessionTokenRef.current;
    sessionTokenRef.current = undefined;

    new google.maps.places.PlacesService(
      document.getElementById("googlemaps-attribution-container")!
    ).getDetails(
      {
        placeId: suggestion.place_id,
        fields: ["formatted_address", "name", "place_id", "geometry.location"],
        sessionToken,
      },
      (place: PlaceDetail, status: PlacesServiceStatus) => {
        if (status === "OK") {
          setPlaceDetail(place);
          console.log(place);
        }
      }
    );
  };

  return (
    <S.InputContainer>
      <S.InputItem
        id="location-input"
        placeholder="Rua"
        onChange={handleChange}
        value={value}
      />

      {suggestions.length > 0 && (
        <S.SuggestionsContainer>
          <S.SuggestionList role="listbox">
            {suggestions.map((suggestion) => (
              <S.SuggestionItem
                key={suggestion.place_id}
                tabIndex={-1}
                role="option"
                aria-selected="false"
                onClick={() => handleSuggestionSelected(suggestion)}
              >
                {suggestion.description}
              </S.SuggestionItem>
            ))}
          </S.SuggestionList>
        </S.SuggestionsContainer>
      )}

      <div id="googlemaps-attribution-container"></div>
    </S.InputContainer>
  );
}

export default InputAutofill;
