import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
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
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { AddressForm } from './components/AddressForm'

const checkoutFormValidationSchema = zod.object({
  address: zod.object({
    cep: zod
      .string()
      .min(8, 'Necessário 8 dígitos (apenas números).')
      .max(8, 'Necessário 8 dígitos (apenas números).'),
    rua: zod.string().min(1, 'Informe a rua'),
    num: zod.string().min(1, 'Informe o número'),
    complemento: zod.string(),
    bairro: zod.string().min(1, 'Informe o bairro'),
    cidade: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(1, 'Informe o UF'),
  }),
  payment: zod.object({
    type: zod.enum(['credit', 'debit', 'cash']),
  }),
  created: zod.boolean(),
})

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const {
    coffees,
    cart,
    resetCart,
    order: { address },
    submitOrder,
  } = useContext(CoffeeContext)

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      address: {
        cep: '',
        rua: '',
        num: '',
        complemento: '',
        bairro: '',
        cidade: address.cidade,
        uf: address.uf,
      },
      payment: {
        type: 'credit',
      },
      created: false,
    },
  })

  const { handleSubmit, reset, control, setValue } = checkoutForm

  function handleSubmitCheckoutForm(order: CheckoutFormData) {
    submitOrder(order)
    resetCart()
    reset()
    alert(`Pedido confirmado!
    Total de itens: R$ ${priceToString(totalItems)}
    Entrega: R$ ${priceToString(deliveryCost)}
    Total: R$ ${totalOrder}
    `)
    navigate('/success')
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
    <form onSubmit={handleSubmit(handleSubmitCheckoutForm)}>
      <CheckoutContainer>
        <FormProvider {...checkoutForm}>
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
              <AddressForm />
            </ShippingArticle>
            <PaymentArticle>
              <ArticleTitles>
                <CurrencyDollar size={22} />
                <div>
                  <h2>Pagamento</h2>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </ArticleTitles>
              <Controller
                control={control}
                name="payment.type"
                render={({ field }) => {
                  return (
                    <PaymentCards>
                      <PaymentCard
                        selected={field.value === 'credit'}
                        onClick={() => setValue('payment.type', 'credit')}
                      >
                        <CreditCard size={16} weight="light" />
                        <span>Cartão de crédito</span>
                      </PaymentCard>
                      <PaymentCard
                        selected={field.value === 'debit'}
                        onClick={() => setValue('payment.type', 'debit')}
                      >
                        <Bank size={16} weight="light" />
                        <span>Cartão de débito</span>
                      </PaymentCard>
                      <PaymentCard
                        selected={field.value === 'cash'}
                        onClick={() => setValue('payment.type', 'cash')}
                      >
                        <Money size={16} weight="light" />
                        <span>Dinheiro</span>
                      </PaymentCard>
                    </PaymentCards>
                  )
                }}
              ></Controller>
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
              <ButtonSubmit type="submit">Confirmar Pedido</ButtonSubmit>
            </CheckoutSummary>
          </aside>
        </FormProvider>
      </CheckoutContainer>
    </form>
  )
}
