import { client } from '../lib/client';
import { Box, Grid, Container, Heading, Text } from '@chakra-ui/react';
import { Banner, ProductCard } from '../components';

export default function Home({ products, bannerData }) {

  return (
    <div>
      <Banner data={bannerData[0]} />
      <Container maxWidth='container.xl'>
        <Box mt={8}>
          <Heading textAlign='center'>New Arrivals</Heading>
          <Text textAlign='center' fontSize='0.8rem'>Check out what we have in store for you</Text>
          <Box pt={6} >
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap='1rem' py={4}>
              {products.map((product, i) => <ProductCard key={product._id} product={product} />)}
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]{_id, slug, productName, price, image}';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
