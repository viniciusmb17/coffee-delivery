import produce from 'immer'
import { ActionTypes } from './actions'

export interface ICartItem {
  coffeeId: string
  quantity: number
}

export interface ICartState {
  items: ICartItem[]
}

export function cartReducer(state: ICartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      return produce(state, (draft) => {
        const item = <ICartItem>{
          coffeeId: action.payload.coffeeId,
          quantity: action.payload.quantity,
        }

        const coffeeIndex = draft.items.findIndex(
          (coffee) => item.coffeeId === coffee.coffeeId,
        )

        coffeeIndex === -1
          ? draft.items.push(item)
          : (draft.items[coffeeIndex].quantity += item.quantity)
      })
    }
    case ActionTypes.CHANGE_ITEM_CART_QUANTITY: {
      return produce(state, (draft) => {
        const { coffeeId, quantity } = action.payload
        const coffeeIndex = draft.items.findIndex(
          (coffee) => coffee.coffeeId === coffeeId,
        )

        coffeeIndex !== -1 && (draft.items[coffeeIndex].quantity = quantity)
      })
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const { coffeeId } = action.payload
      return { items: state.items.filter((item) => item.coffeeId !== coffeeId) }
    }
    case ActionTypes.RESET_CART: {
      return { items: [] }
    }
    default:
      throw new Error()
  }
}
