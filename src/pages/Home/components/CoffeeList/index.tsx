import { v4 as uuidv4 } from 'uuid'
import { Tag } from '../../../../components/Tag'
import { CoffeeCard } from './components/CoffeeCard'
import {
  CoffeeListCards,
  CoffeeListContainer,
  CoffeeListHeader,
  FilteredTags,
} from './style'
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
} from '../../../../assets/coffees'

const coffeeTags = {
  tradicional: 'Tradicional',
  especial: 'Especial',
  comLeite: 'Com Leite',
  alcoolico: 'Alcoólico',
  gelado: 'Gelado',
  quente: 'Quente',
}

const coffees = [
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
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    imageSrc: MochaccinoImg,
    tags: [coffeeTags.tradicional, coffeeTags.comLeite],
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
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
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imageSrc: IrlandesImg,
    tags: [coffeeTags.especial, coffeeTags.alcoolico],
  },
]

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h1>Nossos cafés</h1>
        <FilteredTags>
          <Tag>{coffeeTags.tradicional}</Tag>
          <Tag>{coffeeTags.especial}</Tag>
          <Tag>{coffeeTags.comLeite}</Tag>
          <Tag>{coffeeTags.alcoolico}</Tag>
          <Tag>{coffeeTags.gelado}</Tag>
        </FilteredTags>
      </CoffeeListHeader>
      <CoffeeListCards>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            name={coffee.name}
            description={coffee.description}
            imageSrc={coffee.imageSrc}
            price={coffee.price}
            tags={coffee.tags}
          />
        ))}
      </CoffeeListCards>
    </CoffeeListContainer>
  )
}
