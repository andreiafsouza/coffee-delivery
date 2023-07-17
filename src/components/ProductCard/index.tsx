import * as S from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { ProductType } from "../../context/ProductProvider";
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../../context/CartProvider";
import { ReactElement, useState } from "react";
import { CheckMark } from "../CheckMark";
import { InCartModalMessage } from "../InCartModalMessage";
import { QuantitySelect } from "../QuantitySelect";
import { formatNumberToCurrency } from "../../utils";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  cart: CartItemType[];
};

const ProductCard = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  cart,
}: PropsType): ReactElement => {
  const theme = useTheme();

  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [showInCartMessage, setShowInCartMessage] = useState(false);
  const item: CartItemType | undefined = cart.find(
    (item) => item.sku === product.sku
  );
  const inCart: boolean = cart.some((item) => item.sku === product.sku);

  const img: string = new URL(
    `../../assets/${product.sku}.png`,
    import.meta.url
  ).href;

  const onShowInCartMessage = () => {
    if (productQuantity !== item?.quantity) {
      setShowInCartMessage(true);
      setTimeout(() => {
        setShowInCartMessage(false);
      }, 4001);
    }
  };

  const handleAddToCart = () => {
    // Check if the product already exists in the cart
    if (!inCart) {
      dispatch({
        type: REDUCER_ACTIONS.ADD,
        payload: { ...product, quantity: productQuantity },
      });
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...product, quantity: productQuantity },
      });
    } else {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: {
          ...product,
          quantity: item ? productQuantity + item?.quantity : productQuantity,
        },
      });
    }
    setProductQuantity(1);
    onShowInCartMessage();
  };

  const handleAddQuantity = () => {
    const newQuantity = productQuantity + 1;
    setProductQuantity(newQuantity);
  };

  const handleSubtractQuantity = () => {
    if (productQuantity > 1) {
      const newQuantity = productQuantity - 1;
      setProductQuantity(newQuantity);
    }
  };

  return (
    <>
      <S.ProductListContainer>
        <S.ProductCardContainer>
          <S.ImageContainer>
            <S.ProductCardImage src={img} alt={`a cup of ${product.name}`} />
          </S.ImageContainer>
          <S.ProductCardContent>
            <S.Content>
              <S.ProductTypeTagContainer>
                <S.ProductTypeTag>{product.type}</S.ProductTypeTag>
              </S.ProductTypeTagContainer>
              <S.ProductTitle>{product.name}</S.ProductTitle>
              <S.ProductDescription>{product.description}</S.ProductDescription>
              <S.ActionContainer>
                <S.CoffePrice>
                  {formatNumberToCurrency(product.price)}
                </S.CoffePrice>
                <QuantitySelect
                  quantity={productQuantity}
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
          </S.ProductCardContent>
        </S.ProductCardContainer>
      </S.ProductListContainer>
      {showInCartMessage ? <InCartModalMessage /> : null}
    </>
  );
};

export default ProductCard;
