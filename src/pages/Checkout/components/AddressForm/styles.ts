import styled from "styled-components";

export const AddressFormContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

const ItemContainerBase = styled.div`
  position: relative;
  padding-block: 1rem;
  /* display: grid;
  gap: 0.75rem;

  input {
    width: 100%;
  } */
`;

export const InputContainer = styled(ItemContainerBase)`
  position: relative;
  padding-block: 0.5rem;
`;

export const InputContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & > :first-child {
    flex: 0.3;
  }

  & > :last-child {
    flex: 1;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: -0.6rem;
  left: 0.2em;
  font-size: ${(props) => props.theme.fontSize[14]};
`;

const InputBase = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize[14]};
  background: ${(props) => props.theme.base.input};
  border: 1px solid ${(props) => props.theme.base.button};

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

export const ErrorText = styled.span`
  color: ${(props) => props.theme.base.error};
  font-size: ${(props) => props.theme.fontSize[12]};
  position: absolute;
  left: 0.2em;
  bottom: -0.9em;
`;

export const ItemContainer = styled(ItemContainerBase)``;

export const ItemContainerStreet = styled(ItemContainerBase)`
  position: relative;
`;

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

export const SuggestionsContainer = styled.div`
  position: absolute;
  z-index: 9999;
  width: 100%;

  border-bottom: 1px solid ${(props) => props.theme.base.button};
  border-left: 1px solid ${(props) => props.theme.base.button};
  border-right: 1px solid ${(props) => props.theme.base.button};

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  background: ${(props) => props.theme.base.button};
`;

export const SuggestionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SuggestionItem = styled.li`
  font-size: ${(props) => props.theme.fontSize[14]};
  padding: 0.25rem 0.5rem;
  margin: 0.25rem 0;
  opacity: 1;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      opacity: 0.8;
    }
  }
`;

export const RequiredFieldsInfo = styled.p`
  font-size: ${(props) => props.theme.fontSize[12]};
  font-style: italic;
  color: ${(props) => props.theme.base.subtitle};
`;
