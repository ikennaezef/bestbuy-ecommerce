import React from 'react';
import {Box, Container, Image, Flex, Button, Heading, Text} from '@chakra-ui/react';

const Banner = () => {
  return (
    <Box minH='60vh' bg='#EEEEEE'>
      <Container maxWidth='container.xl' py={16}>
        <Flex align='center'>
          <Box w='50%'>
            <Heading as='h4' fontSize='1.2rem' fontWeight='400'>SMALL TEXT</Heading>
            <Heading fontSize='2.8rem' fontWeight='700' mb={6}>MID TEXT</Heading>
            <Button size='md' bgColor='blue.400' rounded='md'>Button Text</Button>
          </Box>
          <Box w='50%'>
            Hello
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Banner