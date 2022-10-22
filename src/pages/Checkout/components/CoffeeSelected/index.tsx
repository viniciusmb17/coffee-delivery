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
import { Minus, Plus, Trash } from 'phosphor-react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function CoffeeSelected() {
  const { coffees, cart, changeItemCartQuantity, removeItemFromCart } =
    useContext(CoffeeContext)

  function handlePlus(coffeeId: string, quantity: number) {
    handleQuantityChange(coffeeId, quantity + 1)
  }

  function handleMinus(coffeeId: string, quantity: number) {
    handleQuantityChange(coffeeId, quantity - 1)
  }

  function handleQuantityChange(coffeeId: string, quantity: number) {
    changeItemCartQuantity(coffeeId, quantity)
  }

  function handleRemove(coffeeId: string) {
    removeItemFromCart(coffeeId)
  }

  return (
    <>
      {cart.items.length !== 0 ? (
        cart.items.map((item) => {
          const coffee = coffees.find((coffee) => coffee.id === item.coffeeId)
          const coffeePrice = coffee?.price || 0

          function priceToString(price: number) {
            return price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }

          return (
            <>
              <CheckoutItem key={`CheckoutItem${item.coffeeId}`}>
                <ItemInfo key={`ItemInfo${item.coffeeId}`}>
                  <img src={coffee?.imageSrc} alt="" />
                  <InfoDetails key={`InfoDetails${item.coffeeId}`}>
                    <InfoDetailsTitle key={`InfoDetailsTitle${item.coffeeId}`}>
                      {coffee?.name}
                    </InfoDetailsTitle>
                    <InfoDetailsActions
                      key={`InfoDetailsActions${item.coffeeId}`}
                    >
                      <BuyCounterContainer
                        key={`BuyCounterContainer${item.coffeeId}`}
                      >
                        <BuyCounterDiv
                          key={`BuyCounterDivMinus${item.coffeeId}`}
                          onClick={() =>
                            handleMinus(item.coffeeId, item.quantity)
                          }
                        >
                          <Minus
                            key={`Minus${item.coffeeId}`}
                            size={'0.875rem'}
                            weight={'bold'}
                          />
                        </BuyCounterDiv>
                        <InputQuantity
                          key={`InputQuantity${item.coffeeId}`}
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.coffeeId,
                              Number(e.target.value),
                            )
                          }
                        />
                        <BuyCounterDiv
                          key={`BuyCounterDivPlus${item.coffeeId}`}
                          onClick={() =>
                            handlePlus(item.coffeeId, item.quantity)
                          }
                        >
                          <Plus
                            key={`Plus${item.coffeeId}`}
                            size={'0.875rem'}
                            weight={'bold'}
                          />
                        </BuyCounterDiv>
                      </BuyCounterContainer>
                      <ButtonRemove
                        key={`BuyCounterDivMinus${item.coffeeId}`}
                        onClick={() => handleRemove(item.coffeeId)}
                      >
                        <Trash key={`Trash${item.coffeeId}`} size={'1rem'} />
                        Remover
                      </ButtonRemove>
                    </InfoDetailsActions>
                  </InfoDetails>
                </ItemInfo>
                <span key={`span${item.coffeeId}`}>
                  {`R$ ${priceToString(coffeePrice * item.quantity)}`}
                </span>
              </CheckoutItem>
              <Divider key={`Divider${item.coffeeId}`} />
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
