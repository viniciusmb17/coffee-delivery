import {
  BuyCounter,
  CardBuyActions,
  CardBuyCart,
  CardBuyValue,
  CardBuyValueContainer,
  CoffeeCardBuy,
  CoffeeCardContainer,
  CoffeeCardDescription,
  InputQuantity,
  TagsContainer,
} from './style'
import Expresso from '../../../../../../assets/coffees/expresso.png'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Tag } from '../../../../../../components/Tag'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Expresso} alt="" />
      <TagsContainer>
        <Tag variant="filled">TRADICIONAL</Tag>
        <Tag variant="filled">QUENTE</Tag>
      </TagsContainer>
      <h2>Expresso Tradicional</h2>
      <CoffeeCardDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeCardDescription>
      <CoffeeCardBuy>
        <CardBuyValueContainer>
          <span>R$</span>
          <CardBuyValue>9,90</CardBuyValue>
        </CardBuyValueContainer>
        <CardBuyActions>
          <BuyCounter>
            <Minus size={'0.875rem'} weight={'bold'} />
            <InputQuantity value={1} />
            <Plus size={'0.875rem'} weight={'bold'} />
          </BuyCounter>
          <CardBuyCart onClick={() => alert('Add to cart')}>
            <ShoppingCart size={22} weight="fill" />
          </CardBuyCart>
        </CardBuyActions>
      </CoffeeCardBuy>
    </CoffeeCardContainer>
  )
}
