import * as S from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { CoffeeType } from "../../../../context/CoffeesProvider";
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../../../../context/CartProvider";
import { ReactElement, useState } from "react";
import { CheckMark } from "../../../../components/CheckMark";
import { InCartModalMessage } from "../InCartModalMessage";
import { QuantitySelect } from "../../../../components/QuantitySelect";
import { formatNumberToCurrency } from "../../../../utils";

type PropsType = {
  coffee: CoffeeType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  cart: CartItemType[];
};

const CoffeeCard = ({
  coffee,
  dispatch,
  REDUCER_ACTIONS,
  cart,
}: PropsType): ReactElement => {
  const theme = useTheme();

  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1);
  const [showInCartMessage, setShowInCartMessage] = useState(false);
  const item: CartItemType | undefined = cart.find(
    (item) => item.sku === coffee.sku
  );
  const inCart: boolean = cart.some((item) => item.sku === coffee.sku);

  const img: string = new URL(
    `../../../../assets/${coffee.sku}.png`,
    import.meta.url
  ).href;

  const onShowInCartMessage = () => {
    if (coffeeQuantity !== item?.quantity) {
      setShowInCartMessage(true);
      setTimeout(() => {
        setShowInCartMessage(false);
      }, 4001);
    }
  };

  const handleAddToCart = () => {
    // Check if the item already exists in the cart
    if (!inCart) {
      dispatch({
        type: REDUCER_ACTIONS.ADD,
        payload: { ...coffee, quantity: coffeeQuantity },
      });
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...coffee, quantity: coffeeQuantity },
      });
    } else {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: {
          ...coffee,
          quantity: item ? coffeeQuantity + item?.quantity : coffeeQuantity,
        },
      });
    }
    setCoffeeQuantity(1);
    onShowInCartMessage();
  };

  const handleAddQuantity = () => {
    const newQuantity = coffeeQuantity + 1;
    setCoffeeQuantity(newQuantity);
  };

  const handleSubtractQuantity = () => {
    if (coffeeQuantity > 1) {
      const newQuantity = coffeeQuantity - 1;
      setCoffeeQuantity(newQuantity);
    }
  };

  return (
    <>
      <S.CoffeeListContainer>
        <S.CoffeeCardContainer>
          <S.ImageContainer>
            <S.CoffeeCardImage src={img} alt={`a cup of ${coffee.name}`} />
          </S.ImageContainer>
          <S.CoffeeCardContent>
            <S.Content>
              <S.CoffeeTypeTagContainer>
                <S.CoffeeTypeTag>{coffee.type}</S.CoffeeTypeTag>
              </S.CoffeeTypeTagContainer>
              <S.CoffeeTitle>{coffee.name}</S.CoffeeTitle>
              <S.CoffeeDescription>{coffee.description}</S.CoffeeDescription>
              <S.ActionContainer>
                <S.CoffePrice>
                  {formatNumberToCurrency(coffee.price)}
                </S.CoffePrice>
                <QuantitySelect
                  quantity={coffeeQuantity}
                  onAddQuantity={handleAddQuantity}
                  onSubtractQuantity={handleSubtractQuantity}
                />
                <S.ShoppingCartAdd
                  aria-label="adicionar ao carrinho"
                  title="Adicionar ao Carrinho"
                  onClick={handleAddToCart}
                >
                  {inCart ? <CheckMark /> : null}
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    color={theme.base.white}
                  />
                </S.ShoppingCartAdd>
              </S.ActionContainer>
            </S.Content>
          </S.CoffeeCardContent>
        </S.CoffeeCardContainer>
      </S.CoffeeListContainer>
      {showInCartMessage ? <InCartModalMessage /> : null}
    </>
  );
};

export default CoffeeCard;
