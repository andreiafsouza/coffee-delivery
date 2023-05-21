import { useContext } from "react";
import CoffeesContext, {
  UseCoffeeContextType,
} from "../context/CoffeesProvider";

const useCoffees = (): UseCoffeeContextType => {
  return useContext(CoffeesContext);
};

export default useCoffees;
