import { CheckoutFormWrapper } from './style'

export function CheckoutForm() {
  return (
    <CheckoutFormWrapper>
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
    </CheckoutFormWrapper>
  )
}
