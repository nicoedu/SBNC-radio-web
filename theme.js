// theme.js
import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  fonts: {},
  colors: {
    primary: '#2E3092',
    secondary: '#D8B6B2',
    background: '#FFFFFF',
    pan: {
      100: '#D8B6B2',
      200: '#AC3639',
    },
    music: {
      100: '#984BAE',
      200: '#57126B',
    },
    band: {
      100: '#B1EC91',
      200: '#76C04E',
    },
  },
})
export default theme
