import React from 'react'
import { client, urlFor } from '../../lib/client';

import { Box, Container, Flex, Button, Image, Text, Heading } from '@chakra-ui/react';

const ProductDetails = ({ product }) => {
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug== '${slug}'][0]`;
  const product = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { product }
  }
}

export const getStaticPaths = async () => {
  const query = `*[_type=="product]{
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