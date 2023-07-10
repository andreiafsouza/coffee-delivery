import { ReactNode } from "react";
import * as S from "./styles";
import { useTheme } from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  icon?: ReactNode;
  title: string;
  color?: string;
  hover?: string;
  outlined?: boolean;
  background?: string;
  disabled?: boolean;
  size?: "small" | "default";
  onClick?: () => void;
}

export const CustomButton = ({
  type,
  hover,
  icon,
  title,
  size,
  color,
  background,
  outlined,
  disabled,
  onClick,
}: Props) => {
  const theme = useTheme();
  return (
    <S.Container
      title={title}
      type={type ? type : "button"}
      size={size || "default"}
      background={background}
      hover={hover}
      onClick={onClick}
      outlined={outlined}
      disabled={disabled}
    >
      <S.IconContainer>{icon}</S.IconContainer>
      <S.TextContainer color={color}>{title}</S.TextContainer>
    </S.Container>
  );
};
