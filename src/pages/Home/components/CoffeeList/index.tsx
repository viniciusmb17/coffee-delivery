import { Tag } from '../../../../components/Tag'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeListCards, CoffeeListContainer, FilteredTags } from './style'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <FilteredTags>
        <Tag>TRADICIONAL</Tag>
        <Tag>ESPECIAL</Tag>
        <Tag>COM LEITE</Tag>
        <Tag>ALCOÓLICO</Tag>
        <Tag>GELADO</Tag>
      </FilteredTags>
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
