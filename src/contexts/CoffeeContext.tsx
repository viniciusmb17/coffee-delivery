import { createContext, ReactNode, useEffect, useMemo, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  AmericanoImg,
  ArabeImg,
  CafeComLeiteImg,
  CafeGeladoImg,
  CappuccinoImg,
  ChocolateQuenteImg,
  CubanoImg,
  ExpressoCremosoImg,
  ExpressoImg,
  HavaianoImg,
  IrlandesImg,
  LatteImg,
  MacchiatoImg,
  MochaccinoImg,
} from '../assets/coffees'
import { CheckoutFormData } from '../pages/Checkout'
import {
  addToCartAction,
  changeItemCartQuantityAction,
  removeItemFromCartAction,
  resetCartAction,
} from '../reducers/cart/actions'
import { cartReducer, ICartState } from '../reducers/cart/reducer'
import { submitOrderAction } from '../reducers/order/actions'
import { orderReducer } from '../reducers/order/reducer'

interface ICoffeeContextTypes {
  coffees: {
    id: string
    name: string
    description: string
    price: number
    imageSrc: string
    tags: string[]
  }[]
  coffeeTags: {
    tradicional: string
    especial: string
    comLeite: string
    alcoolico: string
    gelado: string
    quente: string
  }
  addToCart: (coffeeId: string, quantity: number) => void
  cart: ICartState
  changeItemCartQuantity: (coffeeId: string, quantity: number) => void
  removeItemFromCart: (coffeeId: string) => void
  order: CheckoutFormData
  submitOrder: (orderInfo: CheckoutFormData) => void
  resetCart: () => void
}

interface ICoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as ICoffeeContextTypes)

export function CoffeeContextProvider({
  children,
}: ICoffeeContextProviderProps) {
  const [order, orderDispatch] = useReducer(orderReducer, {
    address: {
      cep: '',
      rua: '',
      num: '',
      complemento: '',
      bairro: '',
      cidade: 'Porto Alegre',
      uf: 'RS',
    },
    payment: {
      type: 'credit',
    },
    created: false,
  })
  const [cart, cartDispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return { items: [] }
    },
  )
  const coffeeTags = {
    tradicional: 'Tradicional',
    especial: 'Especial',
    comLeite: 'Com Leite',
    alcoolico: 'Alco??lico',
    gelado: 'Gelado',
    quente: 'Quente',
  }

  const coffees = useMemo(() => {
    return [
      {
        id: uuidv4(),
        name: 'Expresso Tradicional',
        description: 'O tradicional caf?? feito com ??gua quente e gr??os mo??dos',
        price: 9.9,
        imageSrc: ExpressoImg,
        tags: [coffeeTags.tradicional, coffeeTags.quente],
      },
      {
        id: uuidv4(),
        name: 'Expresso Americano',
        description: 'Expresso dilu??do, menos intenso que o tradicional',
        price: 9.9,
        imageSrc: AmericanoImg,
        tags: [coffeeTags.tradicional],
      },
      {
        id: uuidv4(),
        name: 'Expresso Cremoso',
        description: 'Caf?? expresso tradicional com espuma cremosa',
        price: 9.9,
        imageSrc: ExpressoCremosoImg,
        tags: [coffeeTags.tradicional],
      },
      {
        id: uuidv4(),
        name: 'Expresso Gelado',
        description: 'Bebida preparada com caf?? expresso e cubos de gelo',
        price: 9.9,
        imageSrc: CafeGeladoImg,
        tags: [coffeeTags.tradicional, coffeeTags.gelado],
      },
      {
        id: uuidv4(),
        name: 'Caf?? com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.9,
        imageSrc: CafeComLeiteImg,
        tags: [coffeeTags.tradicional, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Latte',
        description:
          'Uma dose de caf?? expresso com o dobro de leite e espuma cremosa',
        price: 9.9,
        imageSrc: LatteImg,
        tags: [coffeeTags.tradicional, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Capuccino',
        description:
          'Bebida com canela feita de doses iguais de caf??, leite e espuma',
        price: 9.9,
        imageSrc: CappuccinoImg,
        tags: [coffeeTags.tradicional, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Macchiato',
        description:
          'Caf?? expresso misturado com um pouco de leite quente e espuma',
        price: 9.9,
        imageSrc: MacchiatoImg,
        tags: [coffeeTags.tradicional, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Mocaccino',
        description:
          'Caf?? expresso com calda de chocolate, pouco leite e espuma',
        price: 9.9,
        imageSrc: MochaccinoImg,
        tags: [coffeeTags.tradicional, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e caf??',
        price: 9.9,
        imageSrc: ChocolateQuenteImg,
        tags: [coffeeTags.especial, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Cubano',
        description:
          'Drink gelado de caf?? expresso com rum, creme de leite e hortel??',
        price: 9.9,
        imageSrc: CubanoImg,
        tags: [coffeeTags.especial, coffeeTags.alcoolico, coffeeTags.gelado],
      },
      {
        id: uuidv4(),
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com caf?? e leite de coco',
        price: 9.9,
        imageSrc: HavaianoImg,
        tags: [coffeeTags.especial],
      },
      {
        id: uuidv4(),
        name: '??rabe',
        description: 'Bebida preparada com gr??os de caf?? ??rabe e especiarias',
        price: 9.9,
        imageSrc: ArabeImg,
        tags: [coffeeTags.especial],
      },
      {
        id: uuidv4(),
        name: 'Irland??s',
        description:
          'Bebida a base de caf??, u??sque irland??s, a????car e chantilly',
        price: 9.9,
        imageSrc: IrlandesImg,
        tags: [coffeeTags.especial, coffeeTags.alcoolico],
      },
    ]
  }, [
    coffeeTags.alcoolico,
    coffeeTags.comLeite,
    coffeeTags.especial,
    coffeeTags.gelado,
    coffeeTags.quente,
    coffeeTags.tradicional,
  ])

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffee-delivery:cart-1.0.0', stateJSON)
  }, [cart])

  function addToCart(coffeeId: string, quantity: number) {
    cartDispatch(addToCartAction(coffeeId, quantity))
  }

  function changeItemCartQuantity(coffeeId: string, quantity: number) {
    cartDispatch(changeItemCartQuantityAction(coffeeId, quantity))
  }

  function removeItemFromCart(coffeeId: string) {
    cartDispatch(removeItemFromCartAction(coffeeId))
  }

  function resetCart() {
    cartDispatch(resetCartAction())
  }

  function submitOrder(orderInfo: CheckoutFormData) {
    orderDispatch(submitOrderAction(orderInfo))
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        coffeeTags,
        addToCart,
        cart,
        changeItemCartQuantity,
        removeItemFromCart,
        resetCart,
        order,
        submitOrder,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
