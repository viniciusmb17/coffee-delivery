import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  line-height: 130%;
  margin-top: 2rem;

  h1 {
    position: absolute;
    align-items: center;
    left: calc(50% - 16.0625rem / 2 - 28.9688rem);
    font-family: 'Baloo 2';
    font-weight: 800;
    font-style: normal;
    font-size: 2rem;
  }
`
export const FilteredTags = styled.div`
  position: absolute;
  display: flex;
  height: 1.5625rem;
  flex-direction: row;
  padding: 0;
  gap: 0.5rem;
  align-items: center;
  left: calc(50% - 25.5625rem / 2 + 22.2813rem);
`

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0.375rem 0.75rem;
  gap: 0.5rem;

  height: 1.5625rem;
  font-weight: 700;
  font-size: 0.625rem;
  border-radius: 100px;

  border: 1px solid ${(props) => props.theme.yellow};
  color: ${(props) => props.theme['yellow-dark']};
`

export const CoffeeListCards = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  width: 70rem;
  left: calc(50% - 74rem / 2);
  margin-top: 8rem;
  padding-bottom: 9.75rem;
`
