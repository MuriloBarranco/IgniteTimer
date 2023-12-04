import styled from 'styled-components'

export const HistoryContainer = styled.main`
  height: 100%;
  width: 100%;
  max-width: 60.1875rem;
  margin: 0 auto;

  padding: 3.125rem 2rem;

  display: flex;
  gap: 2rem;
  flex-direction: column;

  header {
    h1 {
      color: ${({ theme }) => theme['gray-100']};
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`

export const TableContainer = styled.div`
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    thead tr {
      display: grid;
      grid-template-columns: 4fr 1fr 2fr 2fr;
      gap: 1rem;

      background-color: ${({ theme }) => theme['gray-600']};
      padding: 1rem 1.5rem;

      border-radius: 8px 8px 0 0;

      th {
        color: ${({ theme }) => theme['gray-100']};
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.6;
        text-align: start;
      }
    }
  }

  tbody {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`
