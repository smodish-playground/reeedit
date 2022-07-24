import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('gray.100', 'gray.800')(props),
      color: mode('gray.800', 'gray.100')(props),
    },
  }),
}

const theme = extendTheme({
  config,
  styles,
})

export default theme
