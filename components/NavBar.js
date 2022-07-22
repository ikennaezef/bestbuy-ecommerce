import React from 'react'
import NextLink from 'next/link';
import { Box, Container, Text, Link, Button, Flex, Hide, Show, UnorderedList, ListItem } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';

const NavBar = () => {
  return (
    <nav>
      <Container maxWidth='container.xl' py={4}>
        <Flex align='center' justify='space-between'>
          <Box>
            <Flex fontWeight='700' fontSize='2rem'><Text>BEST</Text><Text display='inline' color='blue.500'>BUY</Text></Flex>
          </Box>
          <Flex align='center' gap='1rem'>
            <Show above='md'>
              <UnorderedList listStyleType='none' display='flex' gap='1rem'>
                <ListItem>
                  <NextLink href='/'>
                    <Link>Home</Link>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink href='/'>
                    <Link>Blog</Link>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink href='/'>
                    <Link>About</Link>
                  </NextLink>
                </ListItem>
              </UnorderedList>
            </Show>
            <Button variant='ghost' p={2} position='relative'>
              <AiOutlineShopping fontSize='1.8rem' />
              <Text rounded='full' textAlign='center' boxSize='1.2rem' position='absolute' top='5px' right='2px' p={1} fontSize='0.8rem' color='white' bg='red.400' >1</Text>
            </Button>
            <Hide above='md'>
              <FaBars fontSize='1.2rem' />
            </Hide>
          </Flex>
        </Flex>
      </Container>
    </nav>
  )
}

export default NavBar