import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
  padding: 4rem 10rem;
  height: 2.375rem;
  line-height: 130%;

  font-family: 'Baloo 2', cursive;
  font-weight: 700;

  img {
    max-width: 5.309rem;
    max-height: 2.5rem;
    width: 100%;
    height: 100%;
  }
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 51.25rem;
    max-width: 90rem;
    width: 100%;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  max-width: fit-content;
  width: 100%;
`

export const LocationContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: fit-content;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;

  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  color: ${(props) => props.theme.purple};

  span {
    color: ${(props) => props.theme['purple-dark']};
    white-space: nowrap;
  }
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
