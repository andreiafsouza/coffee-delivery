import styled from "styled-components";

interface scrollProps {
  scrollY: boolean;
}

export const Container = styled.main`
  max-width: 74rem;
  margin: 0 auto;
`;

export const Checkout = styled.div`
  gap: 2rem;
  display: grid;
  justify-content: center;
  padding: 0 1rem 1rem;
  margin-bottom: 2rem;

  @media (min-width: 60em) {
    grid-template-columns: 57% 1fr;
    padding: 0 2rem 2rem;
  }
`;

export const BackButtonWrapper = styled.div`
  padding-inline: 1rem;
  display: flex;
  align-items: flex-start;
  max-width: fit-content;

  @media (min-width: 60em) {
    padding-inline: 2rem;
  }
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:last-child {
    grid-row: 1;
  }

  @media (min-width: 60em) {
    &:last-child {
      grid-row: auto;
    }
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckoutTitle = styled.p`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.base.subtitle};
  font-size: ${(props) => props.theme.fontSize[18]};
  font-weight: 700;
  line-height: 130%;
  margin-top: 2.5rem;
  margin-bottom: calc(0.9375rem - 0.75rem);
`;

export const AddressCard = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.base.card};
  border-radius: 6px;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const TextContainer = styled.div``;

export const Title = styled.p`
  color: ${(props) => props.theme.base.subtitle};
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.base.text};
  font-size: ${(props) => props.theme.fontSize[14]};
`;

export const PaymentCard = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.base.card};
  border-radius: 6px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  gap: 0.75rem;

  @media (min-width: 55em) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const SelectedProductContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.base.card};

  & > :first-child {
    padding-top: 0;
  }
`;

export const ProductListContainer = styled.div<scrollProps>`
  max-height: ${(props) => (props.scrollY ? "18rem" : "auto")};
  overflow-y: ${(props) => (props.scrollY ? "scroll" : "none")};
  padding-right: ${(props) => (props.scrollY ? "0.3em" : "")};

  /* Webkit */
  ::-webkit-scrollbar {
    width: 8px;
    background-color: ${(props) => props.theme.base.card};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => props.theme.base.label};
  }

  /* Firefox */
  scrollbar-width: thin;

  & > :first-child(div) {
    padding-top: 0;
  }
`;

export const TotalValuesContainer = styled.div`
  padding-block: 1.5rem;
  display: grid;
  gap: 0.84375rem;
`;

const ItemContainerBase = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSize[14]};
`;

export const ItemsContainer = styled(ItemContainerBase)`
  span:nth-child(2) {
    font-size: ${(props) => props.theme.fontSize[16]};
  }
`;
export const ShippingContainer = styled(ItemContainerBase)`
  span:nth-child(2) {
    font-size: ${(props) => props.theme.fontSize[16]};
  }
`;
export const TotalPriceContainer = styled(ItemContainerBase)`
  font-size: ${(props) => props.theme.fontSize[20]};
  font-weight: 700;
  color: ${(props) => props.theme.base.subtitle};
`;

export const ItemsText = styled.span``;

export const NoItemInCartContainer = styled.div`
  padding-block: 0.5rem;
`;

export const NoItemInCartText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.base.error};
`;

export const TasksCointainer = styled.div`
  padding-top: 1rem;
`;

export const Tasks = styled.p`
  color: ${(props) => props.theme.brand.yellowLight};
  font-size: ${(props) => props.theme.fontSize[14]};
  padding-bottom: 0.4rem;
  display: flex;
`;
