import { HStack, Button, Heading, useColorMode, Avatar } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const iconSize = '5'
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack as="nav" justifyContent="space-between" spacing="20">
      <Button variant="ghost">
        <Heading color={'gray.200'}>Reeedit</Heading>
      </Button>
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
    </HStack>
  )
}

export default Navbar
