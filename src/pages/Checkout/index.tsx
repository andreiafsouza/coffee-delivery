import * as S from "./styles";
import {
  MapPinLine,
  CurrencyDollar,
  Money,
  Bank,
  CreditCard,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { AddressForm } from "./components/AddressForm";
import { Button } from "../../components/Button";
import { CheckoutCoffeeCard } from "./components/CheckoutCoffeeCard";
import { NavLink } from "react-router-dom";

import useCart from "../../hooks/useCart";

export const Checkout = () => {
  const theme = useTheme();
  const { totalItems, totalPrice } = useCart();

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
            <form>
              <AddressForm />
            </form>
          </S.AddressCard>
        </S.CheckoutContainer>

        <S.PaymentCard>
          <S.TitleContainer>
            <CurrencyDollar size={22} color={theme.brand.purple} />
            <S.TextContainer>
              <S.Title>Pagamento</S.Title>
              <S.Subtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </S.Subtitle>
            </S.TextContainer>
          </S.TitleContainer>
          <S.ButtonContainer>
            <Button
              icon={<CreditCard size={16} color={theme.brand.purple} />}
              title={"Cartão de crédito"}
            />
            <Button
              icon={<Bank size={16} color={theme.brand.purple} />}
              title={"cartão de débito"}
            />
            <Button
              icon={<Money size={16} color={theme.brand.purple} />}
              title={"dinheiro"}
            />
          </S.ButtonContainer>
        </S.PaymentCard>
      </S.CardContainer>

      <S.CardContainer>
        <S.CheckoutTitle>Cafés selecionados</S.CheckoutTitle>
        <S.SelectedCoffeContainer>
          <CheckoutCoffeeCard title="Expresso Tradicional" price="R$ 9,90" />
          <CheckoutCoffeeCard title="Latte" price="R$ 9,90" />
          <S.TotalValuesContainer>
            <S.ItemsContainer>
              <span>Total de itens</span>
              <span>{`R$ ${totalPrice}`}</span>
            </S.ItemsContainer>
            <S.ShippingContainer>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </S.ShippingContainer>
            <S.TotalPriceContainer>
              <span>Total</span>
              <span>R$ 33,20</span>
            </S.TotalPriceContainer>
          </S.TotalValuesContainer>
          <NavLink
            to="/success"
            title="Confirmar pedido"
            style={{ textDecoration: "none" }}
          >
            <S.ConfirmButton>Confirmar pedido</S.ConfirmButton>
          </NavLink>
        </S.SelectedCoffeContainer>
      </S.CardContainer>
    </S.Container>
  );
};
