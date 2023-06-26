import { createContext, useContext, useState, ReactElement } from "react";

export type GeoLocation = {
  latitude: number;
  longitude: number;
  street: string;
  number: string;
  city: string;
  neighborhood: string;
  state: string;
  postalCode: string;
};

type GeoLocationContextType = {
  geoLocation: GeoLocation | null;
  getGeoLocation: () => void;
};

export const GeoLocationContext = createContext<GeoLocationContextType | null>(
  null
);

export const useGeoLocation = (): GeoLocationContextType => {
  const context = useContext(GeoLocationContext);
  if (!context) {
    throw new Error("useGeoLocation must be used within a GeoLocationProvider");
  }
  return context;
};

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const GeoLocationProvider = ({
  children,
}: ChildrenType): ReactElement => {
  const [geoLocation, setGeoLocation] = useState<GeoLocation | null>(null);
  const apiMapsKey = import.meta.env.VITE_REACT_APP_MAPS_API_KEY;

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiMapsKey}`
            );
            const data = await response.json();
            const results = data.results[0];
            const streetObj = results?.address_components.find(
              (component: any) => component.types.includes("route")
            );
            const street = streetObj?.long_name || "";
            const numberObj = results?.address_components.find(
              (component: any) => component.types.includes("street_number")
            );
            const number = numberObj?.long_name || "";
            const neighborObj = results?.address_components.find(
              (component: any) =>
                component.types.includes("sublocality_level_1")
            );
            const neighborhood = neighborObj?.long_name || "";
            const cityObj = results?.address_components.find((component: any) =>
              component.types.includes("administrative_area_level_2")
            );
            const city = cityObj?.short_name || "";
            const stateObj = results?.address_components.find(
              (component: any) =>
                component.types.includes("administrative_area_level_1")
            );
            const state = stateObj?.short_name || "";
            const postalCodeObj = results?.address_components.find(
              (component: any) => component.types.includes("postal_code")
            );
            const postalCode = postalCodeObj?.long_name || null;
            setGeoLocation({
              latitude,
              longitude,
              street,
              city,
              state,
              postalCode,
              neighborhood,
              number,
            });
          } catch (error) {
            console.error("Error getting geolocation:", error);
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <GeoLocationContext.Provider value={{ geoLocation, getGeoLocation }}>
      {children}
    </GeoLocationContext.Provider>
  );
};
