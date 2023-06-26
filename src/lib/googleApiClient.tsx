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

export type AddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

export type Geometry = {
  location: { lat: () => number; lng: () => number };
};

export type PlaceDetail = {
  formatted_address?: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
  address_components: AddressComponent[];
  geometry?: Geometry;
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

async function getGoogleMapsApiClient(): Promise<GoogleApiClient> {
  const loader = new Loader({
    apiKey: import.meta.env.VITE_REACT_APP_MAPS_API_KEY || "",
    version: "weekly",
    libraries: ["places"],
  });
  const googleApiClient = (await loader.load()) as unknown as GoogleApiClient;
  return googleApiClient;
}

export { getGoogleMapsApiClient };
