import styled from "styled-components";

interface SuggestionsProps {
  suggestions: any; // Adjust the type accordingly
  onSuggestionSelected: (suggestion: string) => Promise<void>;
}

export const InputContainer = styled.div`
  position: relative;
`;

const InputBase = styled.input`
  color: ${(props) => props.theme.base.text};
  font-size: ${(props) => props.theme.fontSize[14]};
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.base.button};
  background: ${(props) => props.theme.base.input};
  border-radius: 4px;
  width: 100%;

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

export const SuggestionsContainer = styled.div`
  position: absolute;
  z-index: 9999;
  width: 100%;

  border-bottom: 1px solid ${(props) => props.theme.base.button};
  border-left: 1px solid ${(props) => props.theme.base.button};
  border-right: 1px solid ${(props) => props.theme.base.button};

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  background: ${(props) => props.theme.base.input};
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

export const InputItem = styled(InputBase)``;

export const Input = styled.input``;
export const Suggestions = styled.div<SuggestionsProps>``;
