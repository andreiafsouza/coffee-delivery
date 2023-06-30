import styled from "styled-components";

export const AddressFormContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

const ItemContainerBase = styled.div`
  position: relative;
  padding-block: 1rem;
`;

export const InputContainer = styled(ItemContainerBase)`
  position: relative;
  padding-block: 0.4rem;
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

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: -0.8rem;
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

export const InputItem = styled(InputBase)`
  &.red-border {
    border: 1px solid ${(props) => props.theme.base.error};
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
`;

export const ErrorText = styled.span`
  color: ${(props) => props.theme.base.error};
  font-size: ${(props) => props.theme.fontSize[12]};
  padding-left: 0.2em;
`;

export const ItemContainer = styled(ItemContainerBase)``;

export const SuggestionsContainer = styled.div`
  position: absolute;
  z-index: 99999;
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

export const ButtonContainer = styled.div`
  display: flex;
  max-width: 50%;

  padding-block: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

export const TextContainer = styled.div``;

const TextInfoBase = styled.div`
  span {
    font-weight: 700;
  }
`;

export const TextInfo = styled(TextInfoBase)``;
