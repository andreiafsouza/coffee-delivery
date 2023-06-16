import styled from "styled-components";

interface SuggestionsProps {
  suggestions: any; // Adjust the type accordingly
  onSuggestionSelected: (suggestion: string) => Promise<void>;
}

export const Input = styled.input``;
export const Suggestions = styled.div<SuggestionsProps>``;
