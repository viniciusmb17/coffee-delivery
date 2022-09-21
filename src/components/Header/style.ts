import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 90rem;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
  padding: 2rem 10rem;
  line-height: 130%;
  height: 6.5rem;

  font-family: 'Baloo 2', cursive;
  font-weight: 700;

  img {
    width: 5.309rem;
    height: 2.5rem;
  }
  nav {
    /* position: relative; */
    /* left: calc(50% - 16.0625rem / 2 - 28.9688rem); */
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 51.25rem;
    /* max-width: 90rem; */
    /* width: 100%; */
    width: 90rem;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  flex-grow: 0;
  flex-shrink: 0;
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
