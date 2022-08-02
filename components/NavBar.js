import React, { useState } from 'react'
import NextLink from 'next/link';

import { Box, Container, Text, Link, Divider, Button, CloseButton, Flex, Hide, Show, UnorderedList, ListItem } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import { Cart } from './';

import { useAppContext } from '../context/AppContext';

const NavBar = () => {

  const [showNav, setShowNav] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useAppContext();

  return (
    <nav style={{ position: 'relative' }}>
      <Container maxWidth='container.xl' py={4}>
        <Flex align='center' justify='space-between'>
          <Box>
            <NextLink href='/'>
              <Link _hover={{ textDecoration: 'none' }}>
                <Flex fontWeight='700' fontSize={{ base: '1.7rem', md: '2rem' }}><Text>BEST</Text><Text display='inline' color='blue.500'>BUY</Text></Flex></Link>
            </NextLink>
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
                  <NextLink href='/blog'>
                    <Link>Blog</Link>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink href='/about'>
                    <Link>About</Link>
                  </NextLink>
                </ListItem>
              </UnorderedList>
            </Show>
            <Button variant='ghost' p={2} position='relative' onClick={() => setShowCart(true)}>
              <AiOutlineShopping fontSize='1.8rem' />
              <Flex align='center' rounded='full' justify='center' boxSize='1.2rem' position='absolute' top='5px' right='2px' p={1} fontSize='0.8rem' color='white' bg='red.500' >{totalQuantities}</Flex>
            </Button>
            <Hide above='md'>
              <Button variant='ghost' onClick={() => setShowNav(true)}>
                <FaBars fontSize='1.2rem' />
              </Button>
            </Hide>
          </Flex>
          <Hide above='md'>
            <Box position='absolute' top='0' right={showNav ? '0' : '-100%'} bg='white' zIndex={5} px={5} py={10} w='full' h='100vh'>
              <Box>
                <Flex justify='end' mb={16}>
                  <CloseButton size='1.5rem' onClick={() => setShowNav(false)} />
                </Flex>
                <UnorderedList listStyleType='none'>
                  <ListItem fontSize='1.3rem'>
                    <NextLink href='/'>
                      <Link display='flex' justifyContent='space-between' onClick={() => setShowNav(false)}>Home <BiChevronRight fontSize='1.6rem' color='#888888' /></Link>
                    </NextLink>
                  </ListItem>
                  <Divider my={4} bg='#CCCCCC' />
                  <ListItem fontSize='1.3rem'>
                    <NextLink href='/blog'>
                      <Link display='flex' justifyContent='space-between' onClick={() => setShowNav(false)}>Blog <BiChevronRight fontSize='1.6rem' color='#888888' /></Link>
                    </NextLink>
                  </ListItem>
                  <Divider my={4} bg='#CCCCCC' />
                  <ListItem fontSize='1.3rem'>
                    <NextLink href='/about'>
                      <Link display='flex' justifyContent='space-between' onClick={() => setShowNav(false)}>About <BiChevronRight fontSize='1.6rem' color='#888888' /></Link>
                    </NextLink>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Hide>
          {showCart && <Cart />}
        </Flex>
      </Container>
    </nav>
  )
}

export default NavBar