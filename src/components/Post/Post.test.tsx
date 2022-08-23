// import { render } from '@testing-library/react'
import { renderWithProviders } from '../../test-utils'
import Post from './Post'
import { IPost } from './Post.interface'

it('renders without crashing', () => {
  const mockPost: IPost = {
    id: 'afcawfu349814t3nkijd',
    title: 'The first fake post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum, dolorem placeat, enim hic dolore dicta eum possimus, mollitia ullam sunt labore voluptates totam. Expedita facere repellat ad placeat.',
    createdAt: Date.now(),
    topics: ['development', 'css'],
    createdBy: 'userId1',
    votes: { up: 35, down: 18 },
  }

  renderWithProviders(<Post {...mockPost} />)
})
