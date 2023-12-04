import styled from 'styled-components'

export const CountDownContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  font-weight: 700;

  span {
    padding: 2rem 1rem;

    border-radius: 8px;
    background-color: ${({ theme }) => theme['gray-700']};
  }

  strong {
    padding: 2rem 0;
    width: 4rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme['green-500']};
  }
`
