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

export function Checkout() {
  const navigate = useNavigate()
  const { coffees, cart } = useContext(CoffeeContext)

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
            <input type="text" name="cep" placeholder="CEP" />
            <input type="text" name="rua" placeholder="Rua" />
            <div>
              <input type="text" name="num" placeholder="Número" />
              <input
                type="text"
                name="complemento"
                placeholder="Complemento (Opcional)"
              />
            </div>
            <div>
              <input type="text" name="bairro" placeholder="Bairro" />
              <input type="text" name="cidade" placeholder="Cidade" />
              <input type="text" name="uf" placeholder="UF" />
            </div>
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
            <PaymentCard selected>
              <CreditCard size={16} weight="light" />
              <span>Cartão de crédito</span>
            </PaymentCard>
            <PaymentCard>
              <Bank size={16} weight="light" />
              <span>Cartão de débito</span>
            </PaymentCard>
            <PaymentCard>
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
