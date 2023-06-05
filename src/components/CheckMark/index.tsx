import * as S from "./styles";
import { useTheme } from "styled-components";
import { Check } from "phosphor-react";

export const CheckMark = () => {
  const theme = useTheme();
  return (
    <S.Container>
      <Check size={16} weight="fill" color={theme.base.white} />
    </S.Container>
  );
};
