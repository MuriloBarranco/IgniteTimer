import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  flex-wrap: wrap;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: 700;
`

export const IconButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;

  background-color: transparent;
  transition: all 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
