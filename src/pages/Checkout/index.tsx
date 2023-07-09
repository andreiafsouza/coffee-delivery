import * as S from "./styles";
import { useState, useEffect } from "react";
import {
  MapPinLine,
  CurrencyDollar,
  Money,
  Bank,
  CreditCard,
  ArrowLeft,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { AddressForm } from "./components/AddressForm";
import ProductCheckoutCard from "./components/ProductCheckoutCard";
import { NavLink } from "react-router-dom";
import { formatNumberToCurrency } from "../../utils";
import useCart from "../../hooks/useCart";
import { CustomButton } from "../../components/CustomButton";
import LoadingSpinner from "~/components/LoadingSpinner";
import SkeletonAddressForm from "~/components/Skeletons/SkeletonAddressForm";
import useAddress from "~/hooks/useAddress";
import { useNavigate } from "react-router-dom";
import { Check } from "phosphor-react";

const Checkout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const addressState = useAddress();
  const { totalItems, totalPrice, dispatch, REDUCER_ACTIONS, cart } = useCart();
  const [shippingPrice, setShippingPrice] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(false);
  const city = addressState?.state.address?.city;
  const paymentTypes = ["Cartão de crédito", "cartão de débito", "pix"];

  const handleSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    navigate("/success", { state: paymentMethod });
  };

  const handleGoBackToProducts = () => {
    navigate("/");
  };

  const handlePaymentMethod = (paymentMethod: string) => {
    if (paymentMethod) {
      setPaymentMethod(paymentMethod);
    }
  };

  useEffect(() => {
    setScrollY(cart.length > 3);
  }, [cart]);

  useEffect(() => {
    if (city) {
      setShippingPrice(4.5);
    }
  }, [city]);

  return (
    <S.Container>
      <S.BackButtonWrapper>
        <CustomButton
          title="escolher cafés"
          icon={<ArrowLeft size={16} color={theme.base.white} />}
          background="transparent"
          onClick={handleGoBackToProducts}
          size="small"
        />
      </S.BackButtonWrapper>
      <S.Checkout>
        <S.CardContainer>
          <S.CheckoutTitle>Complete seu pedido</S.CheckoutTitle>
          <S.CheckoutContainer>
            <S.AddressCard>
              <S.TitleContainer>
                <MapPinLine size={22} color={theme.brand.yellowDark} />
                <S.TextContainer>
                  <S.Title>Endereço de Entrega</S.Title>
                  <S.Subtitle>
                    Informe o endereço onde deseja receber seu pedido
                  </S.Subtitle>
                </S.TextContainer>
              </S.TitleContainer>
              {/*  <SkeletonAddressForm /> */}
              <AddressForm
                dispatch={addressState.dispatch}
                REDUCER_ACTIONS={addressState.REDUCER_ACTIONS}
                state={addressState.state}
              />
            </S.AddressCard>
          </S.CheckoutContainer>

          {city ? (
            <S.PaymentCard>
              <S.TitleContainer>
                <CurrencyDollar size={22} color={theme.brand.yellow} />
                <S.TextContainer>
                  <S.Title>Pagamento</S.Title>
                  <S.Subtitle>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </S.Subtitle>
                </S.TextContainer>
              </S.TitleContainer>
              <S.ButtonContainer>
                {paymentTypes.map((item, index) => (
                  <CustomButton
                    key={index}
                    icon={
                      <CreditCard size={16} color={theme.brand.yellowLight} />
                    }
                    title={item}
                    background={theme.brand.yellowDark}
                    hover={theme.brand.yellow}
                    color={theme.base.white}
                    onClick={() => handlePaymentMethod(item)}
                  />
                ))}
              </S.ButtonContainer>
            </S.PaymentCard>
          ) : null}
        </S.CardContainer>

        <S.CardContainer>
          <S.CheckoutTitle>Cafés selecionados</S.CheckoutTitle>
          <S.SelectedProductContainer>
            <S.ProductListContainer scrollY={scrollY}>
              {cart.length > 0 ? (
                cart.map((item) => {
                  return (
                    <ProductCheckoutCard
                      key={item.sku}
                      product={item}
                      dispatch={dispatch}
                      REDUCER_ACTIONS={REDUCER_ACTIONS}
                    />
                  );
                })
              ) : (
                <>
                  <S.NoItemInCartContainer>
                    <S.NoItemInCartText>
                      Nenhum café adicionado ao carrinho ainda.
                    </S.NoItemInCartText>
                  </S.NoItemInCartContainer>
                  <CustomButton
                    title="escolher cafés"
                    icon={<ArrowLeft size={16} color={theme.base.white} />}
                    onClick={handleGoBackToProducts}
                  />
                </>
              )}
            </S.ProductListContainer>
            <S.TotalValuesContainer>
              <S.ItemsContainer>
                <S.ItemsText>Quantidade de Itens</S.ItemsText>
                {totalItems}
              </S.ItemsContainer>
              <S.ItemsContainer>
                <S.ItemsText>Total de itens</S.ItemsText>
                {formatNumberToCurrency(totalPrice)}
              </S.ItemsContainer>
              <S.ShippingContainer>
                <S.ItemsText>Entrega</S.ItemsText>
                {formatNumberToCurrency(shippingPrice)}
              </S.ShippingContainer>
              <S.TotalPriceContainer>
                <S.ItemsText>Total</S.ItemsText>
                {formatNumberToCurrency(shippingPrice + totalPrice)}
              </S.TotalPriceContainer>
            </S.TotalValuesContainer>
            <CustomButton
              title="Confirmar pedido"
              background={theme.brand.yellowDark}
              hover={theme.brand.yellow}
              color={theme.base.white}
              onClick={handleSubmitOrder}
              disabled={!city || !cart.length || !paymentMethod}
            />
            <S.TasksCointainer>
              <S.Tasks
                style={{ textDecoration: cart.length && "line-through" }}
              >
                Adicione os cafés desejados ao carrinho.
                {cart.length ? (
                  <Check size={16} weight="fill" color={theme.base.success} />
                ) : null}
              </S.Tasks>
              <S.Tasks style={{ textDecoration: city && "line-through" }}>
                Salve um endereço para a entrega.
                {city ? (
                  <Check size={16} weight="fill" color={theme.base.success} />
                ) : null}
              </S.Tasks>
              <S.Tasks
                style={{
                  textDecoration: paymentMethod ? "line-through" : "none",
                }}
              >
                Selecione a forma de pagamento.
                {paymentMethod ? (
                  <Check size={16} weight="fill" color={theme.base.success} />
                ) : null}
              </S.Tasks>
            </S.TasksCointainer>
          </S.SelectedProductContainer>
        </S.CardContainer>
      </S.Checkout>
    </S.Container>
  );
};

export default Checkout;
