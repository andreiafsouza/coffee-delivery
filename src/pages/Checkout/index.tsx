import * as S from "./styles";
import { useState, useEffect } from "react";
import {
  MapPinLine,
  CurrencyDollar,
  Money,
  Bank,
  CreditCard,
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

const Checkout = () => {
  const theme = useTheme();
  const address = useAddress();
  const { totalItems, totalPrice, dispatch, REDUCER_ACTIONS, cart } = useCart();
  const [confirm, setConfirm] = useState<boolean>(false);
  const [deliveryValue, setDeliveryValue] = useState<number>(3.5);
  const [scrollY, setScrollY] = useState(false);

  const handleSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  useEffect(() => {
    setScrollY(cart.length > 3);
  }, [cart]);

  return (
    <S.Container>
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
              dispatch={address.dispatch}
              REDUCER_ACTIONS={address.REDUCER_ACTIONS}
              state={address.state}
            />
          </S.AddressCard>
        </S.CheckoutContainer>

        <S.PaymentCard>
          <S.TitleContainer>
            <CurrencyDollar size={22} color={theme.brand.yellow} />
            <S.TextContainer>
              <S.Title>Pagamento</S.Title>
              <S.Subtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </S.Subtitle>
            </S.TextContainer>
          </S.TitleContainer>
          <S.ButtonContainer>
            <CustomButton
              icon={<CreditCard size={16} color={theme.brand.yellow} />}
              title={"Cartão de crédito"}
            />
            <CustomButton
              icon={<Bank size={16} color={theme.brand.yellow} />}
              title={"cartão de débito"}
            />
            <CustomButton
              icon={<Money size={16} color={theme.brand.yellow} />}
              title={"dinheiro"}
            />
          </S.ButtonContainer>
        </S.PaymentCard>
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
              <S.NoItemInCartTag>
                Nenhum café adicionado ao carrinho ainda.
              </S.NoItemInCartTag>
            )}
          </S.ProductListContainer>
          <S.TotalValuesContainer>
            <S.ItemsContainer>
              <span>Quantidade de Itens</span>
              {totalItems}
            </S.ItemsContainer>
            <S.ItemsContainer>
              <span>Total de itens</span>
              {formatNumberToCurrency(totalPrice)}
            </S.ItemsContainer>
            <S.ShippingContainer>
              <span>Entrega</span>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(deliveryValue)}
            </S.ShippingContainer>
            <S.TotalPriceContainer>
              <span>Total</span>
              {formatNumberToCurrency(deliveryValue + totalPrice)}
            </S.TotalPriceContainer>
          </S.TotalValuesContainer>
          <NavLink
            to="/success"
            title="Confirmar pedido"
            style={{ textDecoration: "none" }}
            onClick={handleSubmitOrder}
          >
            <S.ConfirmButton>Confirmar pedido</S.ConfirmButton>
          </NavLink>
        </S.SelectedProductContainer>
      </S.CardContainer>
    </S.Container>
  );
};

export default Checkout;
