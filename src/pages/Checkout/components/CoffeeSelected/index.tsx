import { useContext } from 'react'
import {
  ButtonRemove,
  BuyCounterContainer,
  BuyCounterDiv,
  CheckoutItem,
  Divider,
  InfoDetails,
  InfoDetailsActions,
  InfoDetailsTitle,
  InputQuantity,
  ItemInfo,
} from './style'
import Expresso from '../../../../assets/coffees/expresso.png'
import { Minus, Plus, Trash } from 'phosphor-react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { useNavigate } from 'react-router-dom'

export function CoffeeSelected() {
  const { coffees, cart } = useContext(CoffeeContext)
  const navigate = useNavigate()

  return (
    <>
      {cart.items.length !== 0 ? (
        cart.items.map((item) => {
          const coffee = coffees.find((coffee) => coffee.id === item.coffeeId)
          const priceToString = coffee?.price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })

          return (
            <>
              <CheckoutItem key={item.coffeeId}>
                <ItemInfo>
                  <img src={Expresso} alt="" />
                  <InfoDetails>
                    <InfoDetailsTitle>{coffee?.name}</InfoDetailsTitle>
                    <InfoDetailsActions>
                      <BuyCounterContainer>
                        <BuyCounterDiv>
                          <Minus size={'0.875rem'} weight={'bold'} />
                        </BuyCounterDiv>
                        <InputQuantity value={item.quantity} />
                        <BuyCounterDiv>
                          <Plus size={'0.875rem'} weight={'bold'} />
                        </BuyCounterDiv>
                      </BuyCounterContainer>
                      <ButtonRemove>
                        <Trash size={'1rem'} />
                        Remover
                      </ButtonRemove>
                    </InfoDetailsActions>
                  </InfoDetails>
                </ItemInfo>
                <span>R$ {priceToString}</span>
              </CheckoutItem>
              <Divider />
            </>
          )
        })
      ) : (
        <>
          <span>Nenhum item selecionado</span>
          <Divider />
        </>
      )}
    </>
  )
}
