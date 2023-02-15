import * as S from "./styles";

import { Plus, Minus } from "phosphor-react";

import { useTheme } from "styled-components";
import { useState } from "react";

export const QuantitySelect = () => {
  const [count, setCount] = useState(1);
  const theme = useTheme();
  return (
    <S.SelectContainer>
      <S.IconContainer>
        <Minus size={14} weight="bold" />
      </S.IconContainer>
      <S.SelectCounter>{count}</S.SelectCounter>
      <S.IconContainer>
        <Plus size={14} weight="bold" />
      </S.IconContainer>
    </S.SelectContainer>
  );
};
