import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client'
import { Box, Container, Image, Flex, Button, Heading, Text } from '@chakra-ui/react';

const Banner = ({ data }) => {
  return (
    <Box minH='60vh' bg='#EEEEEE'>
      <Container maxWidth='container.xl' py={16}>
        <Flex direction={{ base: 'column-reverse', md: 'row' }} align='center'>
          <Box w={{ base: '100%', md: '50%' }}>
            <Heading as='h4' fontSize='1.2rem' fontWeight='400'>{data.smallText}</Heading>
            <Heading fontSize={{ base: '2.4rem', md: '2.8rem' }} fontWeight='700' textTransform='uppercase'>{data.midText}</Heading>
            <Text fontSize={{ base: '1.7rem', md: '2rem' }} color='blue.400' fontWeight='500' mb={6} >{data.discount}</Text>
            <Link href={`/product/${data.slug.current}`}>
              <Button size='md' bgColor='blue.400' _hover={{ bgColor: 'blue.300' }} rounded='sm'>{data.buttonText}</Button>
            </Link>
          </Box>
          <Box w={{ base: '100%', md: '50%' }}>
            <Image boxSize={{ base: '16rem', md: '25rem' }} src={urlFor(data.image[0]).url()} alt='Product Image' />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Banner