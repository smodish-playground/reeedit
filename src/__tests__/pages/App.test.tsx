import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'

import App from '../../App'

it('renders without crashing', () => {
  render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
})
