// import { render } from '@testing-library/react'
import { renderWithProviders } from '../../test-utils'
import PostForm from './PostForm'

it('renders without crashing', () => {
  renderWithProviders(<PostForm />)
})
