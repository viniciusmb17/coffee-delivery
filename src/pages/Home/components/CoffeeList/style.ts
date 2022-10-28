import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  line-height: 130%;
  padding-top: 2rem;
  row-gap: 3.375rem;
`
export const CoffeeListHeader = styled.div`
  display: flex;
  column-gap: 32.5rem;
  padding-left: 10rem;
  padding-right: 10rem;
  white-space: nowrap;

  h1 {
    display: flex;
    align-items: center;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-style: normal;
    font-size: 2rem;
  }
`

export const FilteredTags = styled.div`
  display: flex;
  height: 1.5625rem;
  flex-direction: row;
  padding: 0;
  gap: 0.5rem;
  align-items: center;
`

export const CoffeeListCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  width: 70rem;
  padding-left: 10rem;
  padding-bottom: 8rem;
`
