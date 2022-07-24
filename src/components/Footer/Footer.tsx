import { Flex } from '@chakra-ui/react'

const Footer = () => {
  const thisYear = new Date().getFullYear()
  return (
    <Flex justifyContent="center">
      <footer>©{thisYear}</footer>
    </Flex>
  )
}

export default Footer
