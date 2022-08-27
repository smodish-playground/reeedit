import { renderWithProviders } from '../../test-utils'
import Votes from './Votes'

it('renders without crashing', () => {
  const mockVotes: { id: string; votes: { up: number; down: number } } = {
    id: 'thisisaMock',
    votes: {
      up: 99,
      down: 44,
    },
  }

  renderWithProviders(<Votes {...mockVotes} />)
})
