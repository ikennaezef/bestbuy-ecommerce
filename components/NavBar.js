import React from 'react'
import NextLink from 'next/link';
import {Box, Container, Text, Link, Flex, Hide, Show, UnorderedList, ListItem} from '@chakra-ui/react';
import {FaBars} from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav>
      <Container maxWidth='container.xl' py={4}>
        <Flex align='center' justify='space-between'>
          <Box>
            <Flex fontWeight='700' fontSize='2rem'><Text>BEST</Text><Text display='inline' color='blue.500'>BUY</Text></Flex>
          </Box>
          <Box>
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
            <Hide above='md'>
              <FaBars fontSize='1.2rem'/>
            </Hide>
          </Box>
        </Flex>
      </Container>
    </nav>
  )
}

export default NavBar