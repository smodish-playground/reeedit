import { Link } from 'react-router-dom'

import {
  HStack,
  Heading,
  useColorMode,
  Avatar,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const iconSize = '5'
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue('blackAlpha.800', 'blackAlpha.500')

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      bg={bg}
      h="100%"
      px="5"
    >
      <Link to="/">
        <Heading color={'whiteAlpha.800'}>Reeedit</Heading>
      </Link>
      <HStack justifyContent="space-evenly" alignItems="center" spacing="6">
        {colorMode === 'light' ? (
          <MoonIcon
            onClick={toggleColorMode}
            h={iconSize}
            w={iconSize}
            color={'gray.200'}
          />
        ) : (
          <SunIcon
            onClick={toggleColorMode}
            h={iconSize}
            w={iconSize}
            color={'gray.200'}
          />
        )}
        <Avatar size="sm" />
      </HStack>
    </Flex>
  )
}

export default Navbar
