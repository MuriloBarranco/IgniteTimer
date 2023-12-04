import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 :focus-visible {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-500']} 
 }

 ::selection {
    background-color: ${({ theme }) => theme['yellow-500']};
    color: ${({ theme }) => theme.white};
 }

 body {
    --webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['gray-900']};
 }

 a {
    text-decoration: none;
    color: inherit;
 }

 body,
 input,
 textarea,
 button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
 }

 @media (max-width: 480px){
    html {
       font-size: 87.5%;//14px
    }
 }
`
