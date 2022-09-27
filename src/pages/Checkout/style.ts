import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.div`
  height: calc(100vh - 6.5rem);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 7rem;

  h1 {
    align-items: center;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    margin-bottom: 0.9375rem;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40rem;
    height: 36.9375rem;

    padding: 0;
    gap: 0.75rem;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    background-color: ${(props) => props.theme['base-card']};

    gap: 2rem;
    width: 40rem;
    border-radius: 6px;

    h2,
    span {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      display: flex;
      align-items: center;
    }

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
    }

    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      gap: 1rem;

      width: 35rem;
      height: 13.5rem;

      input {
        height: 2.625rem;
        background-color: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-text']};
        border: 1px solid ${(props) => props.theme['base-button']};
        padding: 0.75rem;
        border-radius: 4px;
      }

      input[name='rua'] {
        width: 35rem;
      }

      input[name='complemento'] {
        width: 21.75rem;
      }

      input[name='cidade'] {
        width: 17.25rem;
      }

      input[name='uf'] {
        width: 3.75rem;
      }

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        gap: 0.75rem;
      }
    }
  }
`

export const ShippingArticle = styled.article`
  height: 23.25rem;
  color: ${(props) => props.theme['yellow-dark']};
`
export const PaymentArticle = styled.article`
  height: 12.9375rem;
  color: ${(props) => props.theme.purple};
`

export const PaymentCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;
  width: 100%;
`
interface IPaymentCardProps {
  readonly selected?: boolean
}

export const PaymentCard = styled.div<IPaymentCardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  width: 11.1669rem;
  height: 3.1875rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  span {
    font-size: 0.75rem !important;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :hover {
    cursor: pointer;
  }
  ${(props) => {
    if (props.selected) {
      return css`
        background-color: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme.purple};
      `
    }
    return css`
      :hover {
        background-color: ${(props) => props.theme['base-hover']};
      }
    `
  }}
`
export const ArticleTitles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 0.5rem;

  width: 35rem;
  height: 2.75rem;
`

export const CheckoutSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;
  width: 28rem;
  height: 31.125rem;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['base-card']};
`
export const CheckoutItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const CheckoutTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  gap: 0.75rem;

  width: 23rem;
  height: 5.75rem;

  flex: none;
  align-self: stretch;
  flex-grow: 0;
`
export const CheckoutTotalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.3125rem;
`

export const CheckoutSummarySpan = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem !important;
  line-height: 130%;

  display: flex;
  align-items: center;
  text-align: right;

  color: ${(props) => props.theme['base-text']};
`
export const CheckoutSummaryPrice = styled(CheckoutSummarySpan)`
  font-size: 1rem !important;
`
export const CheckoutSummaryTotalSpan = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  display: flex;
  align-items: center;
  text-align: right;

  color: ${(props) => props.theme['base-subtitle']};
`

export const Divider = styled.hr`
  width: 23rem;
  height: 0;

  border: 1px solid ${(props) => props.theme['base-button']};

  flex: none;
  align-self: stretch;
  flex-grow: 0;
`

export const ButtonSubmit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  width: 23rem;
  height: 2.875rem;

  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-stretch: 100;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
