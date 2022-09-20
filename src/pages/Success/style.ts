import styled from 'styled-components'
import OrderInfoBorder from '../../assets/order-info-border.svg'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: calc(50% - 16.0625rem / 2 - 28.9688rem);
  margin-top: 5rem;
  min-height: 500px;
`
export const SuccessMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 6.375rem;
`
export const MainTitles = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }

  // Cálculo para totalizar diferença de 40px entre títulos e infos considerando
  // align-items de OrderInfo
  margin-bottom: calc(2.5rem - 0.7188rem);
`
export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  width: 32.875rem;
  height: 16.875rem;

  background-image: url(${OrderInfoBorder});
  background-repeat: no-repeat;
`
export const BaseInfo = styled.div`
  display: flex;
  column-gap: 0.75rem;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`
export const LocalInfo = styled(BaseInfo)``
export const TimeInfo = styled(BaseInfo)``
export const PaymentInfo = styled(BaseInfo)``

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.background};

  width: 2rem;
  height: 2rem;

  border-radius: 33px;

  flex-grow: 0;
  flex: none;
`
export const LocalIcon = styled(IconContainer)`
  background-color: ${(props) => props.theme.purple};
`
export const TimeIcon = styled(IconContainer)`
  background-color: ${(props) => props.theme.yellow};
`
export const PaymentIcon = styled(IconContainer)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const SuccessImage = styled.div`
  display: flex;

  width: 30.75rem;
  height: 18.3125rem;
`
