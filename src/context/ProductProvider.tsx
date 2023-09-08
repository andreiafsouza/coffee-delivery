import { createContext, ReactElement, useState } from "react";

export type ProductType = {
  name: string;
  type: string[];
  description: string;
  sku: string;
  price: number;
};

const initialState: ProductType[] = [
  {
    name: "Expresso Tradicional",
    type: ["Tradicional"],
    description: "O café tradicional feito com água quente e grãos moídos",
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
    description: "Expresso tradicional com espuma cremosa",
    sku: "item003",
    price: 9.9,
  },
  {
    name: "Expresso Gelado",
    type: ["Tradicional", "Gelado"],
    description: "Bebida preparada com expresso e cubos de gelo",
    sku: "item004",
    price: 9.9,
  },
  {
    name: "Café com Leite",
    type: ["Tradicional", "Com Leite"],
    description: "Metade expresso tradicional e metade leite vaporizado",
    sku: "item005",
    price: 10.9,
  },
  {
    name: "Latte",
    type: ["Tradicional", "Com Leite"],
    description:
      "Um shot de expresso com o dobro da quantidade de leite e espuma cremosa",
    sku: "item006",
    price: 10.9,
  },
  {
    name: "Cappuccino",
    type: ["Tradicional", "Com Leite"],
    description:
      "Bebida com canela feita com partes iguais de produto, leite e espuma",
    sku: "item007",
    price: 10.9,
  },
  {
    name: "Macchiato",
    type: ["Tradicional", "Com Leite"],
    description:
      "Expresso misturado com uma pequena quantidade de leite quente e espuma",
    sku: "item008",
    price: 10.9,
  },
  {
    name: "Mochaccino",
    type: ["Tradicional", "Com Leite"],
    description:
      "Expresso com calda de chocolate, uma pequena quantidade de leite e espuma",
    sku: "item009",
    price: 12.9,
  },
  {
    name: "Chocolate Quente",
    type: ["Especial", "Com Leite"],
    description:
      "Bebida feita com chocolate dissolvido em leite quente e produto",
    sku: "item010",
    price: 12.9,
  },
  {
    name: "Cubano",
    type: ["Especial", "Alcoólico", "Gelado"],
    description: "Bebida gelada com expresso, rum, creme e hortelã",
    sku: "item011",
    price: 12.9,
  },
  {
    name: "Havaiano",
    type: ["Especial"],
    description: "Bebida adoçada preparada com café e leite de coco",
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
    type: ["Especial", "Alcoólico"],
    description: "Bebida feita com café, uísque irlandês, açúcar e chantilly",
    sku: "item014",
    price: 12.9,
  },
];

export type UseProductContextType = { products: ProductType[] };

const initialContextState: UseProductContextType = { products: [] };

const ProductsContext =
  createContext<UseProductContextType>(initialContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initialState);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
