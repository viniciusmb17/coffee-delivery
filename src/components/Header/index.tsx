import { useContext } from 'react'
import { ActionsContainer, HeaderContainer, LocationContainer } from './style'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Cart } from '../Cart'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const {
    cart,
    order: { address },
  } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <ActionsContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <span>
              {address.cidade}, {address.uf}
            </span>
          </LocationContainer>
          <Cart counter={cart.items.length} />
        </ActionsContainer>
      </nav>
    </HeaderContainer>
  )
}
