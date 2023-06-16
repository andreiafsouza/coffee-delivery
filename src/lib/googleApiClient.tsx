import { Loader } from "@googlemaps/js-api-loader";

/**
 * This is a wrapper around the Google Maps API client.
 * see https://developers.google.com/maps/documentation/javascript
 */

let googleApiClient: typeof google;

export default async function getGoogleMapsApiClient() {
  if (googleApiClient) {
    return googleApiClient;
  }

  const loader = new Loader({
    apiKey: import.meta.env.VITE_REACT_APP_MAPS_API_KEY,
    version: "weekly",
    libraries: ["places"],
  });

  googleApiClient = await loader.load();

  return googleApiClient;
}
