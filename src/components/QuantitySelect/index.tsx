import * as S from "./styles";

import { Plus, Minus } from "phosphor-react";

import { useTheme } from "styled-components";
import { useState } from "react";

export const QuantitySelect = () => {
  const [count, setCount] = useState(1);
  const theme = useTheme();
  return (
    <S.SelectContainer>
      <Minus size={14} weight="bold" color={theme.brand.purple} />
      <S.SelectCounter>{count}</S.SelectCounter>
      <Plus size={14} weight="bold" color={theme.brand.purple} />
    </S.SelectContainer>
  );
};
