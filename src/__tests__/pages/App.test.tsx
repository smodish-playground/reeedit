// import { render } from '@testing-library/react'
import { renderWithProviders } from '../../test-utils'
import { ChakraProvider } from '@chakra-ui/react'

import App from '../../App'

it('renders without crashing', () => {
  renderWithProviders(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
})
