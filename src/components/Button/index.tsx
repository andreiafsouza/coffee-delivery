import { ReactNode } from "react";
import * as S from "./styles";
import { useTheme } from "styled-components";

interface Props {
  icon?: ReactNode;
  title: string;
  color?: string;
  background?: string;
  size?: "small" | "default";
  onClick?: () => void;
}

export const Button = ({
  icon,
  title,
  size,
  color,
  background,
  onClick,
}: Props) => {
  const theme = useTheme();
  return (
    <S.Container
      size={size || "default"}
      background={background}
      onClick={() => onClick}
    >
      <S.IconContainer>{icon}</S.IconContainer>
      <S.TextContainer color={color}>{title}</S.TextContainer>
    </S.Container>
  );
};
