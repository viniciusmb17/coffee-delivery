import { ActionsContainer, HeaderContainer, LocationContainer } from './style'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Cart } from '../Cart'

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
          <Cart counter={3} />
        </ActionsContainer>
      </nav>
    </HeaderContainer>
  )
}
