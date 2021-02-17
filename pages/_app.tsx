import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps /*, AppContext */ } from "next/app";
import theme from "theme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
        rel="stylesheet"
      ></link>
    </ChakraProvider>
  );
};

export default App;
