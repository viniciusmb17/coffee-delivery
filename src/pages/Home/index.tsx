import { CoffeeList } from "./components/CoffeeList";
import { Introduction } from "./components/Introduction";

export function Home(){
  return (
    <>
      <Introduction />
      <CoffeeList />
    </>
  )
}