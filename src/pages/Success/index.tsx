import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import SuccessDeliveryIllustration from '../../assets/success-delivery-illustration.png'
import {
  SuccessContainer,
  SuccessMain,
  SuccessImage,
  MainTitles,
  OrderInfo,
  LocalInfo,
  TimeInfo,
  PaymentInfo,
  LocalIcon,
  TimeIcon,
  PaymentIcon,
} from './style'

export function Success() {
  return (
    <SuccessContainer>
      <MainTitles>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </MainTitles>
      <SuccessMain>
        <OrderInfo>
          <LocalInfo>
            <LocalIcon>
              <MapPin size={16} weight="fill" />
            </LocalIcon>
            <span>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <br />
              Farrapos - Porto Alegre, RS
            </span>
          </LocalInfo>
          <TimeInfo>
            <TimeIcon>
              <Timer size={16} weight="fill" />
            </TimeIcon>
            <span>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </span>
          </TimeInfo>
          <PaymentInfo>
            <PaymentIcon>
              <CurrencyDollar size={16} weight="fill" />
            </PaymentIcon>
            <span>
              Pagamento na entrega
              <br />
              <strong>Cartão de crédito</strong>
            </span>
          </PaymentInfo>
        </OrderInfo>
        <SuccessImage>
          <img src={SuccessDeliveryIllustration} alt="" />
        </SuccessImage>
      </SuccessMain>
    </SuccessContainer>
  )
}
