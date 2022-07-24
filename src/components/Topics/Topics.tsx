import { VStack, Link } from '@chakra-ui/layout'
import React from 'react'

const Topics = () => {
  const mockData: string[] = [
    'chakraui',
    'bonsai',
    'development',
    'css',
    'star wars',
  ]
  return (
    <VStack align="content-start">
      {mockData.map((topic) => (
        <Link key={topic}>{topic}</Link>
      ))}
    </VStack>
  )
}

export default Topics
