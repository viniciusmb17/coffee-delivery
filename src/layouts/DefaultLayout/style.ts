import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  width: 100%;
  justify-content: center;
`
