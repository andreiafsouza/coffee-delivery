import * as S from "./styles";
import { Plus, Minus } from "phosphor-react";

type PropsType = {
  quantity: number;
  onAddQuantity: () => void;
  onSubtractQuantity: () => void;
};

export const QuantitySelect = ({
  quantity,
  onAddQuantity,
  onSubtractQuantity,
}: PropsType) => {
  return (
    <S.SelectContainer>
      <S.IconContainer onClick={onSubtractQuantity}>
        <Minus size={14} weight="bold" />
      </S.IconContainer>
      <S.SelectCounter>{quantity}</S.SelectCounter>
      <S.IconContainer onClick={onAddQuantity}>
        <Plus size={14} weight="bold" />
      </S.IconContainer>
    </S.SelectContainer>
  );
};
