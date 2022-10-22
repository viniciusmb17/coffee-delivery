import { createContext, ReactNode, useMemo, useReducer } from 'react'
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
import {
  addToCartAction,
  changeItemCartQuantityAction,
  removeItemFromCartAction,
} from '../reducers/cart/actions'
import { cartReducer, ICartState } from '../reducers/cart/reducer'

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
}

interface ICoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as ICoffeeContextTypes)

export function CoffeeContextProvider({
  children,
}: ICoffeeContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] })
  const coffeeTags = {
    tradicional: 'Tradicional',
    especial: 'Especial',
    comLeite: 'Com Leite',
    alcoolico: 'Alcoólico',
    gelado: 'Gelado',
    quente: 'Quente',
  }

  const coffees = useMemo(() => {
    return [
      {
        id: uuidv4(),
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
        imageSrc: ExpressoImg,
        tags: [coffeeTags.tradicional, coffeeTags.quente],
      },
      {
        id: uuidv4(),
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.9,
        imageSrc: AmericanoImg,
        tags: [coffeeTags.tradicional],
      },
      {
        id: uuidv4(),
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.9,
        imageSrc: ExpressoCremosoImg,
        tags: [coffeeTags.tradicional],
      },
      {
        id: uuidv4(),
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.9,
        imageSrc: CafeGeladoImg,
        tags: [coffeeTags.tradicional, coffeeTags.gelado],
      },
      {
        id: uuidv4(),
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.9,
        imageSrc: CafeComLeiteImg,
        tags: [coffeeTags.tradicional, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Latte',
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.9,
        imageSrc: LatteImg,
        tags: [coffeeTags.tradicional, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Capuccino',
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.9,
        imageSrc: CappuccinoImg,
        tags: [coffeeTags.tradicional, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Macchiato',
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.9,
        imageSrc: MacchiatoImg,
        tags: [coffeeTags.tradicional, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.9,
        imageSrc: MochaccinoImg,
        tags: [coffeeTags.tradicional, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.9,
        imageSrc: ChocolateQuenteImg,
        tags: [coffeeTags.especial, coffeeTags.comLeite],
      },
      {
        id: uuidv4(),
        name: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.9,
        imageSrc: CubanoImg,
        tags: [coffeeTags.especial, coffeeTags.alcoolico, coffeeTags.gelado],
      },
      {
        id: uuidv4(),
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.9,
        imageSrc: HavaianoImg,
        tags: [coffeeTags.especial],
      },
      {
        id: uuidv4(),
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.9,
        imageSrc: ArabeImg,
        tags: [coffeeTags.especial],
      },
      {
        id: uuidv4(),
        name: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
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

  function addToCart(coffeeId: string, quantity: number) {
    dispatch(addToCartAction(coffeeId, quantity))
  }

  function changeItemCartQuantity(coffeeId: string, quantity: number) {
    dispatch(changeItemCartQuantityAction(coffeeId, quantity))
  }

  function removeItemFromCart(coffeeId: string) {
    dispatch(removeItemFromCartAction(coffeeId))
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
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
