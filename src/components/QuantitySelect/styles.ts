import styled from "styled-components";

export const SelectContainer = styled.div`
  max-width: 4.5rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.base.button};
  border-radius: 6px;

  padding: 0.53125rem 0.5rem;
  gap: 0.25rem;
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
