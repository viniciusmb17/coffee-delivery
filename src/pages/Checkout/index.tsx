import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { CoffeeSelected } from './components/CoffeeSelected'
import {
  CheckoutContainer,
  ShippingArticle,
  ArticleTitles,
  PaymentArticle,
  CheckoutSummary,
  CheckoutTotal,
  CheckoutItems,
  PaymentCards,
  PaymentCard,
  ButtonSubmit,
  CheckoutSummarySpan,
  CheckoutSummaryPrice,
  CheckoutTotalDiv,
  CheckoutSummaryTotalSpan,
} from './style'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { CheckoutForm } from './components/CheckoutForm'

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'CEP inválido').max(8, 'CEP inválido'),
  rua: zod.string().min(1, 'Informe a rua'),
  num: zod.string().min(1, 'Informe o número'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o UF'),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

interface ISelectedPayment {
  type: 'credit' | 'debit' | 'cash'
}

export function Checkout() {
  const navigate = useNavigate()

  const { coffees, cart } = useContext(CoffeeContext)

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      num: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const { handleSubmit, watch, reset } = checkoutForm

  const [selectedPayment, setSelectedPayment] = useState<ISelectedPayment>({
    type: 'credit',
  })

  function handleChangePaymentCards(type: ISelectedPayment['type']) {
    setSelectedPayment({ type })
  }

  function priceToString(price: number) {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  const totalItems =
    cart.items.length > 0
      ? cart.items
          .map((item) => {
            const coffee = coffees.find((coffee) => coffee.id === item.coffeeId)
            const coffeePrice = coffee?.price || 0
            return coffeePrice * item.quantity
          })
          .reduce((acc, totalItem) => {
            return acc + totalItem
          }, 0)
      : 0
  const deliveryCost = cart.items.length > 0 ? 7.5 : 0
  const totalOrder = priceToString(deliveryCost + totalItems)

  return (
    <CheckoutContainer>
      <section>
        <h1>Complete seu pedido</h1>
        <ShippingArticle>
          <ArticleTitles>
            <MapPinLine size={22} />
            <div>
              <h2>Endereço de Entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </ArticleTitles>
          <form>
            <CheckoutForm />
          </form>
        </ShippingArticle>
        <PaymentArticle>
          <ArticleTitles>
            <CurrencyDollar size={22} />
            <div>
              <h2>Pagamento</h2>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </ArticleTitles>
          <PaymentCards>
            <PaymentCard
              selected={selectedPayment.type === 'credit'}
              onClick={() => handleChangePaymentCards('credit')}
            >
              <CreditCard size={16} weight="light" />
              <span>Cartão de crédito</span>
            </PaymentCard>
            <PaymentCard
              selected={selectedPayment.type === 'debit'}
              onClick={() => handleChangePaymentCards('debit')}
            >
              <Bank size={16} weight="light" />
              <span>Cartão de débito</span>
            </PaymentCard>
            <PaymentCard
              selected={selectedPayment.type === 'cash'}
              onClick={() => handleChangePaymentCards('cash')}
            >
              <Money size={16} weight="light" />
              <span>Dinheiro</span>
            </PaymentCard>
          </PaymentCards>
        </PaymentArticle>
      </section>
      <aside>
        <h1>Cafés selecionados</h1>
        <CheckoutSummary>
          <CheckoutItems>
            <CoffeeSelected />
          </CheckoutItems>
          <CheckoutTotal>
            <CheckoutTotalDiv>
              <CheckoutSummarySpan>Total de itens</CheckoutSummarySpan>
              <CheckoutSummaryPrice>
                {`R$ ${priceToString(totalItems)}`}
              </CheckoutSummaryPrice>
            </CheckoutTotalDiv>
            <CheckoutTotalDiv>
              <CheckoutSummarySpan>Entrega</CheckoutSummarySpan>
              <CheckoutSummaryPrice>{`R$ ${priceToString(
                deliveryCost,
              )}`}</CheckoutSummaryPrice>
            </CheckoutTotalDiv>
            <CheckoutTotalDiv>
              <CheckoutSummaryTotalSpan>Total</CheckoutSummaryTotalSpan>
              <CheckoutSummaryTotalSpan>{`R$ ${totalOrder}`}</CheckoutSummaryTotalSpan>
            </CheckoutTotalDiv>
          </CheckoutTotal>
          <ButtonSubmit onClick={() => navigate('/success')}>
            Confirmar Pedido
          </ButtonSubmit>
        </CheckoutSummary>
      </aside>
    </CheckoutContainer>
  )
}
