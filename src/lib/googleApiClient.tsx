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
    version: "3.50",
    libraries: ["places"],
  });
  googleApiClient = (await loader.load()) as unknown as GoogleApiClient;
  return googleApiClient;
}
