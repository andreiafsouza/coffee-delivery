import { useContext } from "react";
import {
  AddressContext,
  UseAddressContextType,
} from "~/context/AddressProvider";

const useAddress = (): UseAddressContextType => {
  return useContext(AddressContext);
};

export default useAddress;
