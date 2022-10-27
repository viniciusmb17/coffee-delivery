/* eslint-disable no-unused-vars */
import { CheckoutFormData } from '../../pages/Checkout'

export enum ActionTypes {
  SUBMIT_ORDER = 'SUBMIT_ORDER',
}

export function submitOrderAction(order: CheckoutFormData) {
  return {
    type: ActionTypes.SUBMIT_ORDER,
    payload: { order },
  }
}
