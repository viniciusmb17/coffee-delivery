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

  div {
    max-width: 36.75rem;
    width: 100%;
  }
  /* background-image: url(${IntroBackground}); */
`

export const IntroImage = styled.div``

export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 1rem;
`

export const IntroItems = styled.div``

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const BaseIcons = styled.div``
export const CartIcon = styled(BaseIcons)``
export const TimerIcon = styled(BaseIcons)``
export const PackageIcon = styled(BaseIcons)``
export const CoffeeIcon = styled(BaseIcons)``
