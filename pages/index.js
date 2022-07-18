import {client} from '../lib/client';
import {Box, Container, Heading, Text} from '@chakra-ui/react';
import {NavBar, Banner, ProductCard, Footer} from '../components';

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Container maxWidth='container.xl'>
        <Box mt={8}>
          <Heading textAlign='center'>New Arrivals</Heading>
          <Text textAlign='center' fontSize='0.8rem'>Check out what we have in store for you</Text>
          <Box pt={6}>
            {['product1', 'product2'].map(p => <ProductCard/>)}
          </Box>
        </Box>
      </Container>      
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: {products}
  }
}
