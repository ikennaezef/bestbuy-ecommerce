import React, { useRef } from 'react'
import NextLink from 'next/link';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

import { Box, Flex, Button, Link, Text, Heading, Image, CloseButton } from '@chakra-ui/react';
import { AiOutlineShopping, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';

import { toast } from 'react-hot-toast';

import { useAppContext } from '../context/AppContext';

const Cart = () => {

  const cartRef = useRef();
  const { cartItems, totalPrice, totalQuantities, setShowCart, toggleCartItemQuantity, onRemove } = useAppContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();
    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <Box ref={cartRef} bg='rgba(0, 0, 0, 0.5)' w='100vw' position='fixed' top='0' right='0' zIndex={5}>
      <Box bg='white' w={{ base: 'full', md: '50%' }} float='right' h='100vh' p={4} position='relative'>
        <Flex justify='flex-end'>
          <CloseButton onClick={() => setShowCart(false)} />
        </Flex>
        <Flex gap='10px' mb={6}>
          <Text fontSize='1.4rem' fontWeight='600'>Your Cart</Text>
          <Text fontSize='1.4rem' color='red.500'> ({totalQuantities} items)</Text>
        </Flex>

        {cartItems.length < 1 && (
          <Flex direction='column' align='center'>
            <AiOutlineShopping size={150} color='#BBBBBB' />
            <Text fontSize='1.2rem' mb={6}>Your shopping bag is empty</Text>
            <NextLink href='/'>
              <Button bg='blue.600' color='white' size='lg' rounded='none' _hover={{ bg: 'blue.400' }} onClick={() => setShowCart(false)}>Continue Shopping</Button>
            </NextLink>
          </Flex>
        )}

        <Box>
          {cartItems.length > 0 && cartItems.map((item, index) => (
            <Flex key={index} align='center' gap='1rem' mb={2}>
              <Box w='20%'>
                <Image src={urlFor(item?.image[0]).url()} />
              </Box>
              <Box w='70%'>
                <Heading as='h4' fontSize='1.2rem' mb={1}>{item.productName}</Heading>
                <Flex align='center' justify='space-between'>
                  <Text fontSize='1.2rem' fontWeight='600' color='blue.600' mb={2}>${item.price.toFixed(2)}</Text>
                  <Button bg='red.500' boxSize='2rem' p={1} _hover={{ bg: 'red.400' }} onClick={() => onRemove(item)}>
                    <RiCloseLine fontSize='1.5rem' color='white' />
                  </Button>
                </Flex>
                <Flex align='center' mb={4}>
                  <Button size='sm' onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                    <AiOutlineMinus />
                  </Button>
                  <Text px={5} fontSize='1.2rem'>{item.quantity}</Text>
                  <Button size='sm' onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                    <AiOutlinePlus />
                  </Button>
                </Flex>
              </Box>
            </Flex>
          ))}
        </Box>

        {cartItems.length > 0 && (
          <Box position='absolute' bottom='0.5rem' right='0.5rem' w='full' py={4} px={10}>
            <Flex gap='0.5rem' fontSize='1.3rem' justify='space-between' mb={4}>
              <Text fontWeight='600'>Subtotal: </Text>
              <Text>${totalPrice.toFixed(2)}</Text>
            </Flex>
            <Box>
              <Button size='lg' color='white' bg='blue.600' _hover={{ bgColor: 'blue.500' }} w='full' onClick={handleCheckout}>Pay with Stripe</Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Cart