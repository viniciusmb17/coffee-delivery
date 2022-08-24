import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
    width: 7.5rem;
    height: 7.5rem;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeeCardDescription = styled.span`
  margin-top: 0.5rem;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  align-items: center;
  text-align: center;
  padding: 0 1.25rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-label']};
`

export const CoffeeCardBuy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 1.4375rem;
  width: 13rem;
  margin-top: 2.0625rem;

  span {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`
export const CardBuyValueContainer = styled.div`
  display: flex;
  align-items: baseline;
`
export const CardBuyValue = styled.div`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 130%;
  padding-left: 0.25rem;
  color: ${(props) => props.theme['base-text']};
  align-items: bottom;
`
export const CardBuyActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-content: center;
  height: 2.375rem;
`

export const BuyCounter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  height: 2.375rem;

  border-radius: 6px;
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
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
export const CardBuyCart = styled.button`
  border: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  min-width: 2.375rem;
  width: 100%;
  min-height: 2.375rem;
  height: 100%;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  cursor: pointer;
`

export const TagsContainer = styled.div`
  display: flex;
  height: 1.5625rem;
  flex-direction: row;
  padding: 0;
  gap: 0.25rem;
  align-items: center;
`
