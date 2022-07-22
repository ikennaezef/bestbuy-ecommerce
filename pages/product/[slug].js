import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client';

import { Box, Container, Flex, Grid, Button, Image, Text, Heading } from '@chakra-ui/react';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { ProductCard } from '../../components';

import { useAppContext } from '../../context/AppContext';

const ProductDetails = ({ product, others }) => {

  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd } = useAppContext();

  return (
    <Box py={10} minH='65vh'>
      <Container maxW='container.xl'>
        <Flex px={2} align='center' mb={10}>
          <Box w={{ base: 'full', md: '50%' }}>
            <Box>
              <Image src={urlFor(product.image[index]).url()} alt='product image' />
            </Box>
            <Flex gap='1rem' pt={2}>
              {product.image.map((img, i) =>
                <Box p={2} border='1px' w='4rem' borderColor='#DDDDDD' bgColor={index == i ? 'blue.200' : 'white'} cursor='pointer' onClick={() => setIndex(i)} _hover={{ bgColor: 'blue.50' }}>
                  <Image key={index} width='3.6rem' src={urlFor(img).url()} />
                </Box>)}
            </Flex>
          </Box>

          <Box>
            <Heading mb={2} fontSize='2rem'>{product.productName}</Heading>
            <Flex align='center' mb={8}>
              <AiFillStar color='#ECC94B' fontSize='1.1rem' />
              <AiFillStar color='#ECC94B' fontSize='1.1rem' />
              <AiFillStar color='#ECC94B' fontSize='1.1rem' />
              <AiFillStar color='#ECC94B' fontSize='1.1rem' />
              <AiOutlineStar color='#ECC94B' fontSize='1.1rem' />
              <Text ml={2}>(126)</Text>
            </Flex>
            <Heading as='h4' mb={2} fontSize='1.4rem'>Details</Heading>
            <Text mb={2}>{product.details}</Text>
            <Text color='blue.500' fontWeight='600' fontSize='1.4rem' mb={4}>${product.price.toFixed(2)}</Text>
            <Heading as='h4' mb={2} fontSize='1.3rem'>Quantity</Heading>
            <Flex align='center' mb={4}>
              <Button onClick={decQty}>
                <AiOutlineMinus />
              </Button>
              <Text px={5} fontSize='1.2rem'>{qty}</Text>
              <Button onClick={incQty}>
                <AiOutlinePlus />
              </Button>
            </Flex>
            <Flex gap='1rem'>
              <Button color='blue.600' size='lg' rounded='none' bg='white' border='1px' borderColor='blue.600' _hover={{ bgColor: 'blue.50' }} onClick={() => onAdd(product, qty)}>Add to Cart</Button>
              <Button bgColor='blue.600' size='lg' rounded='none' color='white' _hover={{ bgColor: 'blue.500' }}>Buy Now</Button>
            </Flex>
          </Box>
        </Flex>
        <Box>
          <Heading textAlign='center' fontSize='2rem' mb={6}>You may also like</Heading>
          <Grid templateColumns='repeat(5, 1fr)' gap='1rem'>
            {others.map(product => <ProductCard key={product._id} product={product} />)}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default ProductDetails

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current== '${slug}'][0]`;
  const product = await client.fetch(query);

  const othersQuery = `*[_type == "product" && slug.current != '${slug}' ][0..3]{_id, slug, productName, price, image}`;
  const others = await client.fetch(othersQuery);

  return {
    props: { product, others }
  }
}

export const getStaticPaths = async () => {
  const query = `*[_type=="product"]{
    slug {
      current
    }
  }`

  const products = await client.fetch(query);

  const paths = products.map(product => ({
    params: {
      slug: product.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}