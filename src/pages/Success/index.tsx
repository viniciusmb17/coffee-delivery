import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import SuccessDeliveryIllustration from '../../assets/success-delivery-illustration.png'
import { CoffeeContext } from '../../contexts/CoffeeContext'
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
  const {
    order: { address, payment, created },
  } = useContext(CoffeeContext)

  const paymentTypeToString = (type: 'credit' | 'debit' | 'cash') => {
    switch (type) {
      case 'credit':
        return 'Cartão de Crédito'
      case 'debit':
        return 'Cartão de Débito'
      case 'cash':
        return 'Dinheiro'
      default:
        throw new Error()
    }
  }

  return (
    <SuccessContainer>
      {created ? (
        <>
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
                  Entrega em{' '}
                  <strong>
                    {address?.rua}, {address?.num}
                  </strong>
                  <br />
                  {address?.bairro} - {address?.cidade}, {address?.uf}
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
                  <strong>{paymentTypeToString(payment?.type)}</strong>
                </span>
              </PaymentInfo>
            </OrderInfo>
            <SuccessImage>
              <img src={SuccessDeliveryIllustration} alt="" />
            </SuccessImage>
          </SuccessMain>
        </>
      ) : (
        <h1>Não foi possível carregar pedido.</h1>
      )}
    </SuccessContainer>
  )
}
