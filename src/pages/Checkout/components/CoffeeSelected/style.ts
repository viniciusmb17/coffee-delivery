import styled from 'styled-components'

export const CheckoutItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 3.6875rem;

  width: 23rem;
  height: 5rem;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  background-color: ${(props) => props.theme['base-card']};

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${(props) => props.theme['base-text']};

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 1.25rem;

  width: 15.9375rem;
  height: 4rem;

  flex: none;
  order: 0;
  flex-grow: 0;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.5rem;

  width: 10.6875rem;
  height: 3.8125rem;
`
export const InfoDetailsTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`
export const InfoDetailsActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 0.5rem;

  width: 10.6875rem;
  height: 2rem;
`

export const ButtonRemove = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 0.5rem;
  gap: 0.25rem;

  width: 5.6875rem;
  height: 2rem;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  flex: none;
  order: 1;
  flex-grow: 0;

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const BuyCounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  height: 2rem;

  flex: none;
  order: 0;
  flex-grow: 0;

  border-radius: 6px;
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
`
export const BuyCounterDiv = styled.div`
  :hover {
    color: ${(props) => props.theme['purple-dark']};
    cursor: pointer;
  }
`

export const ButtonQuantity = styled.input.attrs((props) => ({
  type: 'button',
  value: props.value,
}))``

export const InputQuantity = styled.input.attrs((props) => ({
  type: 'number',
}))`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  text-align: center;
  width: 20px;
  height: 21px;
  border: 0;
  background-color: inherit;
`

export const Divider = styled.hr`
  width: 23rem;
  height: 0;

  border: 1px solid ${(props) => props.theme['base-button']};

  flex: none;
  align-self: stretch;
  flex-grow: 0;
`
