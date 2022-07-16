import Head from 'next/head'
import Image from 'next/image'
import {Box, Text} from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Box bg='blue.500' p={8}>
        <Text fontWeight='600' fontSize='2rem' color='white' >Hello World</Text>
      </Box>      
    </div>
  )
}
