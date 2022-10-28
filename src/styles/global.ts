import { createGlobalStyle } from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
} as const

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL}) `,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
} as const

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
    width: 100vw;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button:hover {
    cursor: pointer;
  }

@media ${device.mobileS} {
  html {
    font-size: 40%;
  }
} 
@media ${device.mobileM} {
  html {
    font-size: 50%;
  }
} 
@media ${device.mobileL} {
  html {
    font-size: 60%;
  }
} 
@media ${device.tablet} {
  html {
    font-size: 50%;
  }
} 
@media ${device.laptop} {
  html {
    font-size: 80%;
  }
} 
@media ${device.laptopL} {
  html {
    font-size: 100%;
  }
} 









`
