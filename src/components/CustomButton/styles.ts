import styled from "styled-components";

interface ContainerProps {
  size?: "small" | "default";
  color?: string;
  hover?: string;
  outlined?: string;
  background?: string;
}

interface TextProps {
  color?: string;
  size?: "small" | "default";
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.size === "small" ? "0.25rem" : "0.75rem")};
  border: ${(props) =>
    props.outlined ? `2px solid ${props.outlined}` : "none"};
  padding-block: ${(props) => (props.size === "small" ? "0.40625rem" : "1rem")};
  padding-inline: 0.5rem;
  background: ${(props) =>
    props.background ? props.background : props.theme.base.button};
  border-radius: 6px;

  transition: all 0.1s ease-in-out;
  cursor: pointer;

  :focus {
    background: ${(props) => props.theme.brand.purpleLight};
    box-shadow: 0 0 0 2px ${(props) => props.theme.brand.purple};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:focus) {
      transition: all 0.1s ease-in-out;
      background: ${(props) =>
        props.hover ? props.hover : props.theme.base.hover};
      color: ${(props) => props.theme.base.subtitle};
    }
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
