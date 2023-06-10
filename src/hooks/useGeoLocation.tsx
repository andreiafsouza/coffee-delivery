import { useContext } from "react";
import { GeoLocationContext } from "../context/GeoLocationProvider";

export const useGeoLocation = () => {
  const context = useContext(GeoLocationContext);
  if (!context) {
    throw new Error("useGeoLocation must be used within a GeoLocationProvider");
  }
  return context;
};
