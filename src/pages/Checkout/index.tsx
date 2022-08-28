import { CurrencyDollar, MapPinLine } from 'phosphor-react'
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
} from './style'

export function Checkout() {
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
            <PaymentCard>
              <span>CARTÃO DE CRÉDITO</span>
            </PaymentCard>
            <PaymentCard>
              <span>CARTÃO DE DÉBITO</span>
            </PaymentCard>
            <PaymentCard>
              <span>DINHEIRO</span>
            </PaymentCard>
          </PaymentCards>
        </PaymentArticle>
      </section>
      <aside>
        <h1>Cafés selecionados</h1>
        <CheckoutSummary>
          <CheckoutItems>
            <h6>Item 01</h6>
            <h6>Item 02</h6>
          </CheckoutItems>
          <CheckoutTotal>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </CheckoutTotal>
          <button>CONFIRMAR PEDIDO</button>
        </CheckoutSummary>
      </aside>
    </CheckoutContainer>
  )
}
