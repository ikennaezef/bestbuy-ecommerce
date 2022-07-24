import React, { useState, useEffect } from 'react'
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Container, Flex, Heading, Text, Link, Button } from '@chakra-ui/react';
import { BsBagCheck } from 'react-icons/bs';

import { useAppContext } from '../context/AppContext';
import { runFireworks } from '../lib/utils';

const Success = () => {

  const { setCartItems, setTotalPrice, setTotalQuantities } = useAppContext();

  useEffect(() => {

    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [])


  return (
    <Box minH={{ base: 'auto', md: '65vh' }} py={12}>
      <Container maxW='container.sm'>
        <Box bg='blue.50' rounded='md' px={4} py={10} textAlign='center'>
          <Flex justify='center' mb={6}>
            <BsBagCheck fontSize='3rem' color='#38A169' />
          </Flex>
          <Heading fontSize='2rem' mb={2}>Thank you for your purchase</Heading>
          <Text mb={4}>Check your email for the transaction receipt</Text>
          <Text mb={5}>
            For any enquiries, please email
            <Link href='mailto:help@bestbuy.com' pl={2} color='blue.400' fontWeight='600'>help@bestbuy.com</Link>
          </Text>
          <NextLink href='/'>
            <Button bg='blue.600' color='white' size='lg' rounded='none' _hover={{ bg: 'blue.400' }}>CONTINUE SHOPPING</Button>
          </NextLink>
        </Box>
      </Container>
    </Box>
  )
}

export default Success