import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Flex, Grid, UnorderedList, ListItem, Link, Text } from '@chakra-ui/react';

import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <Box bg='blue.900' color='white'>
        <Container maxW='container.xl' py={10}>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap='2rem' alignItems='start'>
            <Box>
              <UnorderedList listStyleType='none'>
                <ListItem fontSize='1.1rem' fontWeight='600' mb={2}>Links</ListItem>
                <ListItem>
                  <NextLink href='/'>
                    <Link _hover={{ color: 'blue.400' }}>Home</Link>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink href='/blog'>
                    <Link _hover={{ color: 'blue.400' }}>Blog</Link>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink href='/about'>
                    <Link _hover={{ color: 'blue.400' }}>About</Link>
                  </NextLink>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <UnorderedList listStyleType='none'>
                <ListItem fontSize='1.1rem' fontWeight='600' mb={2}>Company</ListItem>
                <ListItem>
                  <NextLink href='/'>
                    <Link _hover={{ color: 'blue.400' }}>Support</Link>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink href='/'>
                    <Link _hover={{ color: 'blue.400' }}>Customer Care</Link>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink href='/'>
                    <Link _hover={{ color: 'blue.400' }}>Terms and Conditions</Link>
                  </NextLink>
                </ListItem>
              </UnorderedList>
            </Box>
            <Flex align='center' gap='1rem' pl={{ base: 3, md: 0 }}>
              <Link color='white' _hover={{ color: 'blue.400' }}>
                <AiFillFacebook fontSize='1.5rem' />
              </Link>
              <Link color='white' _hover={{ color: 'blue.400' }}>
                <AiOutlineInstagram fontSize='1.5rem' />
              </Link>
              <Link color='white' _hover={{ color: 'blue.400' }}>
                <AiOutlineTwitter fontSize='1.5rem' />
              </Link>
            </Flex>
          </Grid>
          <Box pt={8} textAlign='center'>
            <Text color='#AAAAAA' fontSize='0.9rem'>&copy;{new Date().getFullYear()} BestBuy. All Rights Reserved</Text>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer