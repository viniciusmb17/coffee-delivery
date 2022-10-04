/* eslint-disable no-unused-vars */

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
}

export function addToCartAction(coffeeId: string, quantity: number) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { coffeeId, quantity },
  }
}
