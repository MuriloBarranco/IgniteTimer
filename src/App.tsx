import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { CyclesProvider } from './context/cycles'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CyclesProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
