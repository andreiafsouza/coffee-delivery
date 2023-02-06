import React from "react";

import * as S from "./styles";

import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";

export const AddressForm = () => {
  const theme = useTheme();
  return (
    <S.AddressFormContainer>
      <S.ItemContainerCep>
        <S.InputItem placeholder="CEP" />
      </S.ItemContainerCep>
      <S.ItemContainerStreet>
        <S.InputItem placeholder="Rua" />
      </S.ItemContainerStreet>

      <S.ItemContainerComplement>
        <S.InputItem placeholder="Número" />
        <S.InputItem placeholder="Complemento" />
      </S.ItemContainerComplement>
      <S.ItemContainerCity>
        <S.InputItem placeholder="Bairro" />
        <S.InputItem placeholder="Cidade" />
        <S.InputItem placeholder="UF" />
      </S.ItemContainerCity>
    </S.AddressFormContainer>
  );
};
