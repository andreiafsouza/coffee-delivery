import { ReactNode } from "react";
import * as S from "./styles";
import { useTheme } from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  icon?: ReactNode;
  title: string;
  color?: string;
  background?: string;
  size?: "small" | "default";
  onClick?: () => void;
}

export const CustomButton = ({
  type,
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
      type={type ? type : "button"}
      size={size || "default"}
      background={background}
      onClick={onClick}
    >
      <S.IconContainer>{icon}</S.IconContainer>
      <S.TextContainer color={color}>{title}</S.TextContainer>
    </S.Container>
  );
};
