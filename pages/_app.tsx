import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from '../themes'
import { UIProvider } from '../context/ui'
import { ENTRIESProvider } from '../context/entries'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ENTRIESProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </ENTRIESProvider>
  )
}

export default MyApp
