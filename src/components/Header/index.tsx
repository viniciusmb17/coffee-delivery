import { HeaderContainer } from './style'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <span>Localização</span>
        <span>Carrinho de compras</span>
      </nav>
    </HeaderContainer>
  )
}
