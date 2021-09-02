import type { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle, theme} from '../styles'
import {RecoilRoot} from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider> 
    </RecoilRoot>
     )
}
export default MyApp
