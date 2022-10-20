import { CartContainer, CartContainerCounter, CartWrapper } from './style'
import { ShoppingCart } from 'phosphor-react'

interface ICartProps {
  counter: number
}

export function Cart({ counter }: ICartProps) {
  return (
    <CartWrapper>
      {counter > 0 && <CartContainerCounter>{counter}</CartContainerCounter>}
      <CartContainer
        to={counter > 0 ? '/checkout' : '/'}
        onClick={() => {
          counter === 0 && alert('Carrinho vazio!')
        }}
      >
        <ShoppingCart size={22} weight="fill" />
      </CartContainer>
    </CartWrapper>
  )
}
