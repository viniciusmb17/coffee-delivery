import { ActionTypes } from './actions'

export interface ICartItem {
  id: string
  coffeeId: string
  quantity: number
}

export interface ICartState {
  items: ICartItem[]
}

export function cartReducer(state: ICartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      console.log('ADD_TO_CART log')
      return state
    }
    default:
      throw new Error()
  }
}
