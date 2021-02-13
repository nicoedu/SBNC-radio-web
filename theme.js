// theme.js
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  md: '768px',
  lg: '960px',
})
const theme = extendTheme({
  breakpoints: breakpoints,
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
  components: {},
})
export default theme
