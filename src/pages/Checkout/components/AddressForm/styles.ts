import styled from "styled-components";

export const AddressFormContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

const ItemContainerBase = styled.div`
  display: grid;
  gap: 0.75rem;

  input {
    width: 100%;
  }
`;

export const ItemContainer = styled(ItemContainerBase)``;

export const ItemContainerStreet = styled(ItemContainerBase)``;

export const ItemContainerCep = styled(ItemContainerBase)`
  @media (min-width: 55em) {
    grid-template-columns: 40%;
  }
`;

export const ItemContainerComplement = styled(ItemContainerBase)`
  @media (min-width: 55em) {
    grid-template-columns: 40% 1fr;
  }
`;

export const ItemContainerCity = styled(ItemContainerBase)`
  @media (min-width: 55em) {
    grid-template-columns: 40% 45% 1fr;
  }
`;

export const InputLabel = styled.label``;

const InputBase = styled.input`
  color: ${(props) => props.theme.base.text};
  font-size: ${(props) => props.theme.fontSize[14]};
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.base.button};
  background: ${(props) => props.theme.base.input};
  border-radius: 4px;

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0px;
  }

  ::placeholder {
    color: ${(props) => props.theme.base.label};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      border: 1px solid ${(props) => props.theme.brand.yellow};
    }
  }
`;

export const InputItem = styled(InputBase)``;
