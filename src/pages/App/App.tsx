import { Container, Box, Grid, GridItem, Flex } from '@chakra-ui/react'
import Navbar from '../../components/Navbar/Navbar'

const thisYear = new Date().getFullYear()

function App() {
  return (
    <Container
      maxW="container.xl"
      bgGradient="linear(to-tr, blue.700, blue.400)"
      py={10}
    >
      <Grid
        templateAreas={`"header header" "topics main" "footer footer"`}
        gridTemplateRows={'100px 1fr 50px'}
        gridTemplateColumns={'150px 1fr'}
        h="full"
        gap="1"
      >
        <GridItem area={'header'}>
          <Navbar />
        </GridItem>
        <GridItem area={'topics'}>Topics</GridItem>
        <GridItem area={'main'}>
          <Box as="main">Main</Box>
        </GridItem>
        <GridItem area={'footer'}>
          <Flex justifyContent="center">
            <footer>©{thisYear}</footer>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default App
