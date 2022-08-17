import {
  IntroductionContainer,
  IntroItems,
  IntroTitle,
  CartIcon,
  ItemContainer,
  TimerIcon,
  PackageIcon,
  CoffeeIcon,
  IntroImage,
} from './style'
import IntroCoffeDelivery from '../../../../assets/intro-coffee-delivery.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Introduction() {
  return (
    <IntroductionContainer>
      <div>
        <IntroTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </IntroTitle>
        <IntroItems>
          <ItemContainer>
            <CartIcon>
              <ShoppingCart weight="fill" />
            </CartIcon>
            <span>Compra simples e segura</span>
          </ItemContainer>
          <ItemContainer>
            <PackageIcon>
              <Package weight="fill" />
            </PackageIcon>
            <span>Embalagem mantém o café intacto</span>
          </ItemContainer>
          <ItemContainer>
            <TimerIcon>
              <Timer weight="fill" />
            </TimerIcon>
            <span>Entrega rápida e rastreada</span>
          </ItemContainer>
          <ItemContainer>
            <CoffeeIcon>
              <Coffee weight="fill" />
            </CoffeeIcon>
            <span>O café chega fresquinho até você</span>
          </ItemContainer>
        </IntroItems>
      </div>
      <IntroImage>
        <img src={IntroCoffeDelivery} alt="" />
      </IntroImage>
    </IntroductionContainer>
  )
}
