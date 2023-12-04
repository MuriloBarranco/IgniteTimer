import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 100%;
  max-width: 40.9375rem;
  margin: 0 auto;

  display: flex;
  gap: 3.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

type ButtonProps = {
  isStop?: boolean
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4rem;
  gap: 0.5rem;

  color: ${({ theme }) => theme['gray-100']};
  background-color: ${({ theme, isStop = false }) =>
    isStop ? theme['red-500'] : theme['green-500']};

  border-radius: 8px;

  span {
    font-weight: 700;
  }

  transition: all 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme, isStop = false }) =>
    isStop ? theme['red-700'] : theme['green-700']};
  }
`
