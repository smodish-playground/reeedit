import { Routes, Route } from 'react-router-dom'

import Posts from './features/posts/Posts/Posts'
import PostDetail from './components/PostDetail/PostDetail'
import Layout from './components/Layout/Layout'
import PostForm from './components/PostForm/PostForm'
import EditPostForm from './components/PostForm/EditPostForm'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path="post">
          <Route index element={<PostForm />} />
          <Route path=":postId" element={<PostDetail />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
