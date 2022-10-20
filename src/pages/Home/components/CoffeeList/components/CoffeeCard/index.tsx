import React, { useState } from 'react'
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
  coffeeId: string
  name: string
  description: string
  price: number
  imageSrc: string
  tags: string[]
  addToCart: (coffeeId: string, quantity: number) => void
}

export function CoffeeCard({
  coffeeId,
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

  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  function handleCoffeeQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const { value } = e.target
    setCoffeeQuantity(Number(value))
  }

  function incrementCoffeeQuantity() {
    setCoffeeQuantity((prevState) => prevState + 1)
  }

  function decrementCoffeeQuantity() {
    setCoffeeQuantity((prevState) =>
      prevState > 0 ? prevState - 1 : prevState,
    )
  }

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
            <BuyCounterDiv onClick={decrementCoffeeQuantity}>
              <Minus size={'0.875rem'} weight={'bold'} />
            </BuyCounterDiv>
            <InputQuantity
              value={coffeeQuantity}
              onChange={handleCoffeeQuantityChange}
            />
            <BuyCounterDiv onClick={incrementCoffeeQuantity}>
              <Plus size={'0.875rem'} weight={'bold'} />
            </BuyCounterDiv>
          </BuyCounterContainer>
          <CardBuyCart
            onClick={() => {
              addToCart(coffeeId, coffeeQuantity)
            }}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </CardBuyCart>
        </CardBuyActions>
      </CoffeeCardBuy>
    </CoffeeCardContainer>
  )
}
