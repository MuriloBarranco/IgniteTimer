import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  width: 272px;
  align-items: center;
  padding: 0.5rem;

  gap: 0.25rem;

  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};

  transition: all 0.4s;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme['green-500']};
  }
`

export const InputControl = styled.input`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  color: ${({ theme }) => theme['gray-100']};
  font-weight: 700;
  font-size: 1.125rem;

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
    font-weight: 700;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;

    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const InputIcon = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-500']};

  transition: all 0.4s;

  &:hover {
    color: ${({ theme }) => theme['green-500']};
  }
`
