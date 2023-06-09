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
    description: "The traditional product made with hot water and ground beans",
    sku: "item001",
    price: 9.9,
  },
  {
    name: "Expresso Americano",
    type: ["Tradicional"],
    description: "Diluted espresso, less intense than the traditional one",
    sku: "item002",
    price: 9.9,
  },
  {
    name: "Expresso Cremoso",
    type: ["Tradicional"],
    description: "Traditional espresso with creamy foam",
    sku: "item003",
    price: 9.9,
  },
  {
    name: "Expresso Gelado",
    type: ["Tradicional", "Gelado"],
    description: "Beverage prepared with espresso and ice cubes",
    sku: "item004",
    price: 9.9,
  },
  {
    name: "Product with Milk",
    type: ["Tradicional", "Com Leite"],
    description: "Half and half of traditional espresso with steamed milk",
    sku: "item005",
    price: 10.9,
  },
  {
    name: "Latte",
    type: ["Tradicional", "Com Leite"],
    description:
      "One shot of espresso with twice the amount of milk and creamy foam",
    sku: "item006",
    price: 10.9,
  },
  {
    name: "Cappuccino",
    type: ["Tradicional", "Com Leite"],
    description:
      "Beverage with cinnamon made of equal parts of product, milk, and foam",
    sku: "item007",
    price: 10.9,
  },
  {
    name: "Macchiato",
    type: ["Tradicional", "Com Leite"],
    description: "Espresso mixed with a small amount of hot milk and foam",
    sku: "item008",
    price: 10.9,
  },
  {
    name: "Mochaccino",
    type: ["Tradicional", "Com Leite"],
    description:
      "Espresso with chocolate syrup, a small amount of milk, and foam",
    sku: "item009",
    price: 12.9,
  },
  {
    name: "Hot Chocolate",
    type: ["Especial", "Com Leite"],
    description:
      "Beverage made with chocolate dissolved in hot milk and product",
    sku: "item010",
    price: 12.9,
  },
  {
    name: "Cubano",
    type: ["Especial", "Alcoholic", "Gelado"],
    description: "Iced drink with espresso, rum, cream, and mint",
    sku: "item011",
    price: 12.9,
  },
  {
    name: "Hawaiian",
    type: ["Especial"],
    description: "Sweetened beverage prepared with coffee and coconut milk",
    sku: "item012",
    price: 12.9,
  },
  {
    name: "Arabic",
    type: ["Especial"],
    description: "Beverage prepared with Arabic coffee beans and spices",
    sku: "item013",
    price: 12.9,
  },
  {
    name: "Irish",
    type: ["Especial", "Alcoholic"],
    description:
      "Drink made with coffee, Irish whiskey, sugar, and whipped cream",
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
