// import { render } from '@testing-library/react'
import { renderWithProviders } from '../../../test-utils'
import Posts from './Posts'

it('renders without crashing', () => {
  renderWithProviders(<Posts />)
})
