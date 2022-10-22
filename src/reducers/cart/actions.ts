/* eslint-disable no-unused-vars */

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  CHANGE_ITEM_CART_QUANTITY = 'CHANGE_ITEM_CART_QUANTITY',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
}

export function addToCartAction(coffeeId: string, quantity: number) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { coffeeId, quantity },
  }
}

export function changeItemCartQuantityAction(
  coffeeId: string,
  quantity: number,
) {
  return {
    type: ActionTypes.CHANGE_ITEM_CART_QUANTITY,
    payload: { coffeeId, quantity },
  }
}

export function removeItemFromCartAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: { coffeeId },
  }
}
