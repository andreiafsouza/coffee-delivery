import { useState, useRef, useEffect } from "react";
import {
  getGoogleMapsApiClient,
  PlacesServiceStatus,
  Prediction,
  PlaceDetail,
} from "../lib/googleApiClient";

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

  const handleSuggestionSelected = async (suggestion: Prediction) => {
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
        ],
        sessionToken,
      },
      (place: PlaceDetail, status: PlacesServiceStatus) => {
        if (status === "OK") {
          setPlaceDetail({
            ...place,
            street:
              place.address_components.find((obj: any) =>
                obj.types.includes("route")
              )?.long_name || "",
            number:
              place.address_components.find((obj: any) =>
                obj.types.includes("street_number")
              )?.long_name || "",
            neighborhood:
              place.address_components.find((obj: any) =>
                obj.types.includes("sublocality_level_1")
              )?.long_name || "",
            city:
              place.address_components.find((obj: any) =>
                obj.types.includes("administrative_area_level_2")
              )?.long_name || "",
            state:
              place.address_components.find((obj: any) =>
                obj.types.includes("administrative_area_level_1")
              )?.short_name || "",
            cep:
              place.address_components.find((obj: any) =>
                obj.types.includes("postal_code")
              )?.long_name || "",
          });
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
