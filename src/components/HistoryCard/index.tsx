import { HistoryCardContainer, HistoryCardInfo, StatusInfo } from './styles'

export type StatusProps = 'ongoing' | 'complete' | 'interrupted'

type HistoryCardProps = {
  title: string
  time: string
  date: string
  status: StatusProps
}

const STATUS = {
  ongoing: 'Em andamento',
  complete: 'Completo',
  interrupted: 'Interrompido',
}

export function HistoryCard({
  title,
  time,
  date,
  status,
}: Readonly<HistoryCardProps>) {
  const statusText = STATUS[status]

  return (
    <HistoryCardContainer>
      <HistoryCardInfo>{title}</HistoryCardInfo>
      <HistoryCardInfo>{time}</HistoryCardInfo>
      <HistoryCardInfo>{date}</HistoryCardInfo>
      <HistoryCardInfo>
        <StatusInfo status={status}>{statusText}</StatusInfo>
      </HistoryCardInfo>
    </HistoryCardContainer>
  )
}
