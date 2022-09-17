import {
  ActionsContainer,
  CartContainer,
  CartContainerCounter,
  CartWrapper,
  HeaderContainer,
  LocationContainer,
} from './style'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <ActionsContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </LocationContainer>
          <CartWrapper>
            <CartContainerCounter>3</CartContainerCounter>
            <CartContainer to="/checkout">
              <ShoppingCart size={22} weight="fill" />
            </CartContainer>
          </CartWrapper>
        </ActionsContainer>
      </nav>
    </HeaderContainer>
  )
}
