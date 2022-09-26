import { CartContainer, CartContainerCounter, CartWrapper } from './style'
import { ShoppingCart } from 'phosphor-react'

interface ICartProps {
  counter: number
}

export function Cart({ counter }: ICartProps) {
  return (
    <CartWrapper>
      <CartContainerCounter>3</CartContainerCounter>
      <CartContainer to="/checkout">
        <ShoppingCart size={22} weight="fill" />
      </CartContainer>
    </CartWrapper>
  )
}
