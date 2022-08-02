import React from 'react'
import NextLink from 'next/link';
import { urlFor } from '../lib/client';
import { truncateText } from '../lib/utils';
import { Box, Text, Link, Image, Divider, Badge } from '@chakra-ui/react';

const ProductCard = ({ product }) => {

  return (
    <NextLink href={`/product/${product.slug.current}`}>
      <Link cursor='pointer' _hover={{ transform: 'scale(1.02)' }}>
        <Box border='1px' borderColor='#e4e4e4' p={2} h='100%' position='relative'>
          {product.oldPrice && <Badge colorScheme='red' variant='solid' fontSize='0.9rem' position='absolute' top='0' left='0'>SALE</Badge>}
          <Image src={urlFor(product.image[0]).url()} w='full' alt='product image' />
          <Divider pt={2} />
          <Text fontSize='1.1rem' fontWeight='600' mb={1}>{truncateText(product.productName)}</Text>
          {product.oldPrice && <Text color='gray.400' textDecoration='line-through'>${product.oldPrice.toFixed(2)}</Text>}
          <Text color='blue.500' fontWeight='500'>${product.price.toFixed(2)}</Text>
        </Box>
      </Link>
    </NextLink>
  )
}

export default ProductCard