import styled from 'styled-components'

export const AddressFormWrapper = styled.div`
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

  input[name='address.rua'] {
    width: 35rem;
  }

  input[name='address.complemento'] {
    width: 21.75rem;
  }

  input[name='address.cidade'] {
    width: 17.25rem;
  }

  input[name='address.uf'] {
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
