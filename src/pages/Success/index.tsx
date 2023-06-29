import { useEffect, useState } from "react";
import * as S from "./styles";
import { CreateAddressFormData } from "../Checkout/components/AddressForm";
import { MapPin, CurrencyDollar, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import useAddress from "~/hooks/useAddress";

import delivery from "../../assets/delivery.png";

interface Props {
  color?: string;
}

const Success = ({ color }: Props) => {
  const theme = useTheme();
  const { state } = useAddress();

  return (
    <S.Container>
      <S.SuccessContent>
        <S.OrderInfoContainer>
          <S.TextContainer>
            <S.OrderTitle>Uhu! Pedido confirmado</S.OrderTitle>
            <S.OrderSubtitle>
              Agora é só aguardar que logo o café chegará até você
            </S.OrderSubtitle>
          </S.TextContainer>
          <S.OrderInfoOuter>
            <S.OrderInfoInner>
              <S.TextInfoContainer>
                <S.IconContainer color={theme.brand.yellow}>
                  <MapPin size={16} weight="fill" color={theme.base.white} />
                </S.IconContainer>
                <S.TextContainer>
                  <S.TextInfo>
                    Entrega em{" "}
                    <span>{`${state.address?.street}, ${state.address?.number}`}</span>
                  </S.TextInfo>
                  <S.TextInfo>{`${state.address?.neighborhood} - ${state.address?.city}, ${state.address?.state}`}</S.TextInfo>
                </S.TextContainer>
              </S.TextInfoContainer>
              <S.TextInfoContainer>
                <S.IconContainer color={theme.brand.yellow}>
                  <Timer size={16} weight="fill" color={theme.base.white} />
                </S.IconContainer>
                <S.TextContainer>
                  <S.TextInfo>Previsão de entrega</S.TextInfo>
                  <S.TextInfoBold>20 min - 30 min </S.TextInfoBold>
                </S.TextContainer>
              </S.TextInfoContainer>
              <S.TextInfoContainer>
                <S.IconContainer color={theme.brand.yellowDark}>
                  <CurrencyDollar size={16} color={theme.base.white} />
                </S.IconContainer>
                <S.TextContainer>
                  <S.TextInfo>Pagamento na entrega</S.TextInfo>
                  <S.TextInfoBold>Cartão de Crédito</S.TextInfoBold>
                </S.TextContainer>
              </S.TextInfoContainer>
            </S.OrderInfoInner>
          </S.OrderInfoOuter>
        </S.OrderInfoContainer>
      </S.SuccessContent>
      <S.ImageContainer>
        <img
          src={delivery}
          alt={
            "Um homem com camisa amarela em calça verde pilotando uma moto roxa com uma caixa para entrega na garupa"
          }
        />
      </S.ImageContainer>
    </S.Container>
  );
};

export default Success;
