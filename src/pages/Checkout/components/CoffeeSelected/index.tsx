import {
  ButtonRemove,
  BuyCounter,
  CheckoutItem,
  InfoDetails,
  InfoDetailsActions,
  InfoDetailsTitle,
  InputQuantity,
  ItemInfo,
} from './style'
import Expresso from '../../../../assets/coffees/expresso.png'
import { Minus, Plus, Trash } from 'phosphor-react'

export function CoffeeSelected() {
  return (
    <CheckoutItem>
      <ItemInfo>
        <img src={Expresso} alt="" />
        <InfoDetails>
          <InfoDetailsTitle>Expresso Tradicional</InfoDetailsTitle>
          <InfoDetailsActions>
            <BuyCounter>
              <Minus size={'0.875rem'} weight={'bold'} />
              <InputQuantity value={1} />
              <Plus size={'0.875rem'} weight={'bold'} />
            </BuyCounter>
            <ButtonRemove>
              <Trash size={'1rem'} />
              Remover
            </ButtonRemove>
          </InfoDetailsActions>
        </InfoDetails>
      </ItemInfo>
      <span>R$ 9,90</span>
    </CheckoutItem>
  )
}
