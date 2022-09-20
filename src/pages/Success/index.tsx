import SuccessDeliveryIllustration from '../../assets/success-delivery-illustration.png'

export function Success() {
  return (
    <>
      <section>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </div>
        <div>
          <div>
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>Cartão de crédito</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <img src={SuccessDeliveryIllustration} alt="" />
        </div>
      </section>
    </>
  )
}
