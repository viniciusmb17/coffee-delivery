import {
  IntroductionContainer,
  IntroItems,
  IntroTitle,
  CartIcon,
  ItemContainer,
  TimerIcon,
  PackageIcon,
  CoffeeIcon,
  IntroSection,
  ImageSection,
} from './style'
import IntroCoffeDelivery from '../../../../assets/intro-coffee-delivery.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Introduction() {
  return (
    <IntroductionContainer>
      <IntroSection>
        <IntroTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
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
      </IntroSection>
      <ImageSection>
        <img src={IntroCoffeDelivery} alt="" />
      </ImageSection>
    </IntroductionContainer>
  )
}
