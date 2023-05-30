import { createContext, ReactElement, useState } from "react";

export type CoffeeType = {
  name: string;
  type: string[];
  description: string;
  sku: string;
  price: number;
};

const initialState: CoffeeType[] = [
  {
    name: "Expresso Tradicional",
    type: ["Tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    sku: "item001",
    price: 9.9,
  },
  {
    name: "Expresso Americano",
    type: ["Tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    sku: "item002",
    price: 9.9,
  },
  {
    name: "Expresso Cremoso",
    type: ["Tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    sku: "item003",
    price: 9.9,
  },
  {
    name: "Expresso Gelado",
    type: ["Tradicional", "Gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    sku: "item004",
    price: 9.9,
  },
  {
    name: "Café com Leite",
    type: ["Tradicional", "Com Leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    sku: "item005",
    price: 10.9,
  },
  {
    name: "Latte",
    type: ["Tradicional", "Com Leite"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    sku: "item006",
    price: 10.9,
  },
  {
    name: "Capuccino",
    type: ["Tradicional", "Com Leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    sku: "item007",
    price: 10.9,
  },
  {
    name: "Macchiato",
    type: ["Tradicional", "Com Leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    sku: "item008",
    price: 10.9,
  },
  {
    name: "Mocaccino",
    type: ["Tradicional", "Com Leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    sku: "item009",
    price: 12.9,
  },
  {
    name: "Chocolate Quente",
    type: ["Especial", "Com Leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    sku: "item010",
    price: 12.9,
  },
  {
    name: "Cubano",
    type: ["Especial", "Alcoolico", "Gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    sku: "item011",
    price: 12.9,
  },
  {
    name: "Havaiano",
    type: ["Especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    sku: "item012",
    price: 12.9,
  },
  {
    name: "Árabe",
    type: ["Especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    sku: "item013",
    price: 12.9,
  },
  {
    name: "Irlandês",
    type: ["Especial", "Alcóolico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    sku: "item014",
    price: 12.9,
  },
];

export type UseCoffeeContextType = { coffees: CoffeeType[] };

const initialContextState: UseCoffeeContextType = { coffees: [] };

const CoffeesContext = createContext<UseCoffeeContextType>(initialContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CoffeeProvider = ({ children }: ChildrenType): ReactElement => {
  const [coffees, setCoffees] = useState<CoffeeType[]>(initialState);

  return (
    <CoffeesContext.Provider value={{ coffees }}>
      {children}
    </CoffeesContext.Provider>
  );
};

export default CoffeesContext;
