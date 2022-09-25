import { useContext } from 'react'
import { Tag } from '../../../../components/Tag'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { CoffeeCard } from './components/CoffeeCard'
import {
  CoffeeListCards,
  CoffeeListContainer,
  CoffeeListHeader,
  FilteredTags,
} from './style'

export function CoffeeList() {
  const { coffees, coffeeTags } = useContext(CoffeeContext)

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
