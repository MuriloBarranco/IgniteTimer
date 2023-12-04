import styled from 'styled-components'
import { StatusProps } from '.'

export const HistoryCardContainer = styled.tr`
  outline: none;
  border: none;
  color: ${({ theme }) => theme['gray-100']};

  display: grid;
  grid-template-columns: 4fr 1fr 2fr 2fr;
  gap: 1rem;
  background-color: ${({ theme }) => theme['gray-700']};
  align-items: start;

  width: 100%;
  padding: 1rem 1.5rem;

  border: solid 2px transparent;
`

export const HistoryCardInfo = styled.td`
  display: flex;
  align-items: start;
  color: ${({ theme }) => theme['gray-300']};

  font-size: 0.875rem;
`

type StatusInfoProps = {
  status: StatusProps
}

const STATUS_COLOR = {
  complete: 'green-300',
  interrupted: 'red-500',
  ongoing: 'yellow-500',
}

export const StatusInfo = styled.div<StatusInfoProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: flex;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${({ status, theme }) => theme[STATUS_COLOR[status]]};
  }
`
