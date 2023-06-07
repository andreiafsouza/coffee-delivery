import styled from "styled-components";

export const SelectContainer = styled.div`
  max-width: 4.5rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.base.button};
  border-radius: 6px;

  padding: 0.53125rem 0.5rem;
  gap: 0.25rem;

  flex-shrink: 0;
`;

export const IconContainer = styled.button`
  transition: all 0.1s ease-in-out;
  border: none;
  border-radius: 1000px;
  background: none;

  svg {
    color: ${(props) => props.theme.brand.purple};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: color 0.1s ease-in-out;
      background: ${(props) => props.theme.base.hover};
      svg {
        color: ${(props) => props.theme.brand.purpleDark};
      }
    }
  }
`;

export const SelectCounter = styled.div`
  min-width: 1.25rem;
  min-height: 1.3125rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: ${(props) => props.theme.base.title};
`;
