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
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 51.25rem;
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
