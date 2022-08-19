import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeListCards, CoffeeListContainer } from './style'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <CoffeeListCards>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeListCards>
    </CoffeeListContainer>
  )
}
