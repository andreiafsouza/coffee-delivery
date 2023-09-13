import styled from "styled-components";

interface ContainerProps {
  size?: "small" | "default";
  color?: string;
  hover?: string;
  outlined?: boolean;
  background?: string;
  disabled?: boolean;
}

interface TextProps {
  color?: string;
  size?: "small" | "default";
}

const getBackgroudColor = (props: any) => {
  let backgroundColor = props.theme.base.button;
  if (props.background && !props.disabled) {
    backgroundColor = props.background;
  } else if (props.disabled) {
    backgroundColor = props.theme.base.disabled;
  }

  return backgroundColor;
};

export const Container = styled.button<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.size === "small" ? "0.25rem" : "0.75rem")};
  border: none;
  padding-block: ${(props) => (props.size === "small" ? "0.40625rem" : "1rem")};
  padding-left: 0.5rem;
  padding-right: 0.7rem;
  background: ${(props) => getBackgroudColor(props)};
  border-radius: 6px;

  transition: all 0.1s ease-in-out;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${(props) =>
    props.outlined && !props.disabled
      ? `
      &:focus {
        background: ${!props.disabled ? props.theme.brand.yellow : "none"};
      }
    `
      : ""}

  @media (hover: hover) and (pointer: fine) {
    ${(props) =>
      !props.disabled &&
      `
      &:hover:not(:focus) {
        transition: all 0.1s ease-in-out;
        background: ${props.hover ? props.hover : props.theme.base.hover};
        color: ${props.theme.base.subtitle};
      }
    `}
  }
`;

export const IconContainer = styled.div`
  flex-shrink: 0;
`;

export const TextContainer = styled.p<TextProps>`
  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => (props.color ? props.color : props.theme.base.text)};
  font-size: ${(props) => props.theme.fontSize[12]};
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
`;
