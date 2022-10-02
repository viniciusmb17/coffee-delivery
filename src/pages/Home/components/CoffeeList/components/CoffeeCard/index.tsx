import {
  BuyCounterContainer,
  BuyCounterDiv,
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

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Tag } from '../../../../../../components/Tag'

interface ICoffeeCardProps {
  name: string
  description: string
  price: number
  imageSrc: string
  tags: string[]
  addToCart: () => void
}

export function CoffeeCard({
  name,
  description,
  price,
  imageSrc,
  tags,
  addToCart,
}: ICoffeeCardProps) {
  const priceToString = price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <CoffeeCardContainer>
      <img src={imageSrc} alt="" />
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag} variant="filled">
            {tag}
          </Tag>
        ))}
      </TagsContainer>
      <h2>{name}</h2>
      <CoffeeCardDescription>{description}</CoffeeCardDescription>
      <CoffeeCardBuy>
        <CardBuyValueContainer>
          <span>R$</span>
          <CardBuyValue>{priceToString}</CardBuyValue>
        </CardBuyValueContainer>
        <CardBuyActions>
          <BuyCounterContainer>
            <BuyCounterDiv>
              <Minus size={'0.875rem'} weight={'bold'} />
            </BuyCounterDiv>
            <InputQuantity defaultValue={1} />
            <BuyCounterDiv>
              <Plus size={'0.875rem'} weight={'bold'} />
            </BuyCounterDiv>
          </BuyCounterContainer>
          <CardBuyCart
            onClick={() => {
              addToCart()
              alert('Add to cart')
            }}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </CardBuyCart>
        </CardBuyActions>
      </CoffeeCardBuy>
    </CoffeeCardContainer>
  )
}
