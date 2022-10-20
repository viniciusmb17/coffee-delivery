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
    default:
      throw new Error()
  }
}
