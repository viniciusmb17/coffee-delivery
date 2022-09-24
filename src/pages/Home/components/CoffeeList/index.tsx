import { v4 as uuidv4 } from 'uuid'
import { Tag } from '../../../../components/Tag'
import { CoffeeCard } from './components/CoffeeCard'
import {
  CoffeeListCards,
  CoffeeListContainer,
  CoffeeListHeader,
  FilteredTags,
} from './style'

import ExpressoImage from '../../../../assets/coffees/expresso.png'

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
    imageSrc: ExpressoImage,
    tags: [coffeeTags.tradicional, coffeeTags.quente],
  },
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageSrc: ExpressoImage,
    tags: [coffeeTags.tradicional, coffeeTags.quente],
  },
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageSrc: ExpressoImage,
    tags: [coffeeTags.tradicional, coffeeTags.quente],
  },
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageSrc: ExpressoImage,
    tags: [coffeeTags.tradicional, coffeeTags.quente],
  },
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageSrc: ExpressoImage,
    tags: [coffeeTags.tradicional, coffeeTags.quente],
  },
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageSrc: ExpressoImage,
    tags: [coffeeTags.tradicional, coffeeTags.quente],
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
