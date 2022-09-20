import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import SuccessDeliveryIllustration from '../../assets/success-delivery-illustration.png'
import {
  SuccessContainer,
  SuccessMainSection,
  SuccessImageSection,
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
      <SuccessMainSection>
        <OrderInfo>
          <LocalInfo>
            <LocalIcon>
              <MapPin size={16} weight="fill" />
            </LocalIcon>
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <br />
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </LocalInfo>
          <TimeInfo>
            <TimeIcon>
              <Timer size={16} weight="fill" />
            </TimeIcon>
            <div>
              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </TimeInfo>
          <PaymentInfo>
            <PaymentIcon>
              <CurrencyDollar size={16} weight="fill" />
            </PaymentIcon>
            <div>
              <span>Pagamento na entrega</span>
              <br />
              <span>
                <strong>Cartão de crédito</strong>
              </span>
            </div>
          </PaymentInfo>
        </OrderInfo>
        <SuccessImageSection>
          <div>
            <img src={SuccessDeliveryIllustration} alt="" />
          </div>
        </SuccessImageSection>
      </SuccessMainSection>
    </SuccessContainer>
  )
}
