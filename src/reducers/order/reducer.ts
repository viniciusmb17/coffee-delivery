import { CheckoutFormData } from '../../pages/Checkout'
import { ActionTypes } from '../order/actions'

export function orderReducer(state: CheckoutFormData, action: any) {
  switch (action.type) {
    case ActionTypes.SUBMIT_ORDER: {
      const { order } = action.payload
      return order
    }
    default:
      throw new Error()
  }
}
