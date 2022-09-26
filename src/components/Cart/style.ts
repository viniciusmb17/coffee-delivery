import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  flex-grow: 0;
`

export const CartContainer = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  min-width: 2.375rem;
  width: 100%;
  min-height: 2.375rem;
  height: 100%;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
export const CartContainerCounter = styled.div`
  visibility: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1.25rem;
  width: 100%;
  min-height: 1.25rem;
  height: 100%;
  margin-left: -0.75rem;
  margin-top: -0.5rem;

  border-radius: 999px;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 130%;
  text-align: center;
  letter-spacing: -0.06rem;

  z-index: 1;
`
