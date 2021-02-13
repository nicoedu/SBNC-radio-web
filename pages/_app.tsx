import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../auth'
import type { AppProps /*, AppContext */ } from 'next/app'
import theme from 'theme'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
