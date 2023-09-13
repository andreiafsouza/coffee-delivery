import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../../../../context/CartProvider";
import { useState, memo } from "react";
import * as S from "./styles";
import { QuantitySelect } from "../../../../components/QuantitySelect";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import { CustomButton } from "../../../../components/CustomButton";
import { formatNumberToCurrency } from "../../../../utils";

type PropsType = {
  product: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const ProductCheckoutCard = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
}: PropsType) => {
  const theme = useTheme();
  const [productQuantity, setProductQuantity] = useState(product.quantity);

  const img: string = new URL(
    `../../../../assets/${product.sku}.png`,
    import.meta.url
  ).href;

  const handleAddQuantity = () => {
    const newQuantity = productQuantity + 1;
    setProductQuantity(newQuantity);
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...product, quantity: newQuantity },
    });
  };

  const handleSubtractQuantity = () => {
    if (productQuantity > 1) {
      const newQuantity = productQuantity - 1;
      setProductQuantity(newQuantity);
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...product, quantity: newQuantity },
      });
    }
  };

  const handleRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: product,
    });

  return (
    <S.Container>
      <S.ProductInfoContainer>
        <S.ImageContainer src={img} alt={`a cup of ${product.name}`} />
        <S.ProductInfo>
          <S.TextContainer>{product.name}</S.TextContainer>
          <S.ButtonContainer>
            <QuantitySelect
              quantity={product.quantity}
              onAddQuantity={handleAddQuantity}
              onSubtractQuantity={handleSubtractQuantity}
            />
            <CustomButton
              icon={<Trash size={16} color={theme.base.error} />}
              title={"Remover"}
              size={"small"}
              onClick={handleRemoveFromCart}
            />
          </S.ButtonContainer>
        </S.ProductInfo>
      </S.ProductInfoContainer>
      <S.PriceTag>{formatNumberToCurrency(product.price)}</S.PriceTag>
    </S.Container>
  );
};

function areProductsEqual(
  { product: prevItem }: PropsType,
  { product: nextItem }: PropsType
) {
  return Object.keys(prevItem).every((key) => {
    return (
      prevItem[key as keyof CartItemType] ===
      nextItem[key as keyof CartItemType]
    );
  });
}

const MemoizedProductCheckoutCard = memo<typeof ProductCheckoutCard>(
  ProductCheckoutCard,
  areProductsEqual
);

export default MemoizedProductCheckoutCard;
