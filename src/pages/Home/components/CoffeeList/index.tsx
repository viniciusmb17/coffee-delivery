import { Tag } from '../../../../components/Tag'
import { CoffeeCard } from './components/CoffeeCard'
import {
  CoffeeListCards,
  CoffeeListContainer,
  CoffeeListHeader,
  FilteredTags,
} from './style'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h1>Nossos cafés</h1>
        <FilteredTags>
          <Tag>TRADICIONAL</Tag>
          <Tag>ESPECIAL</Tag>
          <Tag>COM LEITE</Tag>
          <Tag>ALCOÓLICO</Tag>
          <Tag>GELADO</Tag>
        </FilteredTags>
      </CoffeeListHeader>
      <CoffeeListCards>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeListCards>
    </CoffeeListContainer>
  )
}
