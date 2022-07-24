import { Container, Grid, GridItem } from '@chakra-ui/react'
import Navbar from '../../components/Navbar/Navbar'
import Posts from '../../components/Posts/Posts'
import Topics from '../../components/Topics/Topics'
import PostDetail from '../../components/PostDetail/PostDetail'
import Footer from '../../components/Footer/Footer'

function App() {
  return (
    <Container maxW="container.xl">
      <Grid
        templateAreas={`"header header" "topics main" "footer footer"`}
        gridTemplateRows={'100px 1fr 50px'}
        gridTemplateColumns={'150px 1fr'}
        minH="100vh"
        gap="1"
      >
        <GridItem area={'header'}>
          <Navbar />
        </GridItem>
        <GridItem area={'topics'}>
          <Topics />
        </GridItem>
        <GridItem area={'main'}>
          {/* Router goes here */}
          <Posts />
          <PostDetail />
        </GridItem>
        <GridItem area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default App
