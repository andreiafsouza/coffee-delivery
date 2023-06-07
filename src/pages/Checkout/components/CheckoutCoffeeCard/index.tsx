import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../../../../context/CartProvider";
import { useState } from "react";
import * as S from "./styles";
import { QuantitySelect } from "../../../../components/QuantitySelect";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import { CustomButton } from "../../../../components/CustomButton";
import { formatNumberToCurrency } from "../../../../utils";

type PropsType = {
  coffee: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

export const CheckoutCoffeeCard = ({
  coffee,
  dispatch,
  REDUCER_ACTIONS,
}: PropsType) => {
  const theme = useTheme();
  const [coffeeQuantity, setCoffeeQuantity] = useState(coffee.quantity);

  const img: string = new URL(
    `../../../../assets/${coffee.sku}.png`,
    import.meta.url
  ).href;

  const handleAddQuantity = () => {
    const newQuantity = coffeeQuantity + 1;
    setCoffeeQuantity(newQuantity);
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...coffee, quantity: newQuantity },
    });
  };

  const handleSubtractQuantity = () => {
    if (coffeeQuantity > 1) {
      const newQuantity = coffeeQuantity - 1;
      setCoffeeQuantity(newQuantity);
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...coffee, quantity: newQuantity },
      });
    }
  };

  const handleRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: coffee,
    });

  return (
    <S.Container>
      <S.CoffeInfoContainer>
        <S.ImageContainer src={img} alt={`a cup of ${coffee.name}`} />
        <S.CoffeInfo>
          <S.TextContainer>{coffee.name}</S.TextContainer>
          <S.ButtonContainer>
            <QuantitySelect
              quantity={coffee.quantity}
              onAddQuantity={handleAddQuantity}
              onSubtractQuantity={handleSubtractQuantity}
            />
            <CustomButton
              icon={<Trash size={16} color={theme.brand.purple} />}
              title={"Remover"}
              size={"small"}
              onClick={handleRemoveFromCart}
            />
          </S.ButtonContainer>
        </S.CoffeInfo>
      </S.CoffeInfoContainer>
      <S.PriceTag>{formatNumberToCurrency(coffee.price)}</S.PriceTag>
    </S.Container>
  );
};
