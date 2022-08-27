import React from 'react'
import ReactDOM from 'react-dom/client'
import { setupStore } from './store/store'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const store = setupStore()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
