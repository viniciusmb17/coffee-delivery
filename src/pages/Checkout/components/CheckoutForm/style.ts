import styled from 'styled-components'

export const CheckoutFormWrapper = styled.div`
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
`
