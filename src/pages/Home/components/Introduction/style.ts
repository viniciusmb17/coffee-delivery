import styled from 'styled-components'
import IntroBackground from '../../../../assets/intro-background.svg'

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  max-height: 34rem;
  height: 100%;
  gap: 1rem;

  /* background-image: url(${IntroBackground}); */
`

export const IntroSection = styled.section`
  max-width: 36.75rem;
  width: 100%;

  img {
  }
`

export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 1rem;
  margin-bottom: 4.125rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
  h2 {
    font-weight: 400;
    font-size: 1.25rem;
    font-stretch: 100;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const IntroItems = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  width: 35.4375rem;
  height: 5.25rem;

  align-items: center;
  span {
    color: ${(props) => props.theme['base-text']};
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
`

const BaseIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 2rem;
  height: 2rem;

  border-radius: 1000px;
  color: ${(props) => props.theme.background};
`
export const CartIcon = styled(BaseIcons)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const TimerIcon = styled(BaseIcons)`
  background: ${(props) => props.theme.yellow};
`
export const PackageIcon = styled(BaseIcons)`
  background: ${(props) => props.theme['base-text']};
`
export const CoffeeIcon = styled(BaseIcons)`
  background: ${(props) => props.theme.purple};
`
