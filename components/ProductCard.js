import React from 'react'
import NextLink from 'next/link';
import { urlFor } from '../lib/client';
import { Box, Text, Heading, Link, Image, Divider } from '@chakra-ui/react';

const ProductCard = ({ product }) => {

  return (
    <NextLink href={`/product/${product.slug.current}`}>
      <Link cursor='pointer' _hover={{ transform: 'scale(1.02)' }}>
        <Box border='1px' borderColor='#e4e4e4' p={2} h='100%' >
          <Image src={urlFor(product.image[0]).url()} w='full' />
          <Divider />
          <Text fontSize='1.2rem' fontWeight='600' mb={1}>{product.productName}</Text>
          <Text color='blue.500' fontWeight='500'>${product.price.toFixed(2)}</Text>
        </Box>
      </Link>
    </NextLink>
  )
}

export default ProductCard