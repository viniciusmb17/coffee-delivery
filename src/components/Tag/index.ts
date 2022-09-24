import styled, { css } from 'styled-components'

const variantStyles = (variant = 'outlined') =>
  ({
    outlined: css`
      border: 1px solid ${(props) => props.theme.yellow};
      color: ${(props) => props.theme['yellow-dark']};
    `,
    filled: css`
      padding: 0.25rem 0.5rem;
      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
    `,
  }[variant])

export const Tag = styled.div<{ variant?: string }>`
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
  text-transform: uppercase;
  border-radius: 100px;

  ${({ variant }) => variantStyles(variant)}
`
