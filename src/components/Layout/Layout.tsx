import React from 'react'
import { Outlet } from 'react-router-dom'

import { Container, Grid, GridItem } from '@chakra-ui/react'

import Navbar from '../Navbar/Navbar'
import Topics from '../Topics/Topics'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <Container maxW="container.xl">
      <Grid
        templateAreas={`"header header header" "topics main sidebar" "footer footer footer"`}
        gridTemplateRows={'50px 1fr 50px'}
        gridTemplateColumns={'150px 1fr 150px'}
        minH="100vh"
        gap="5"
      >
        <GridItem area={'header'}>
          <Navbar />
        </GridItem>
        <GridItem area={'topics'}>
          <Topics />
        </GridItem>
        <GridItem area={'main'}>
          <Outlet />
        </GridItem>
        <GridItem area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Layout
