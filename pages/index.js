import { client } from '../lib/client';
import { Box, Grid, Container, Heading, Text } from '@chakra-ui/react';
import { Banner, ProductCard } from '../components';

export default function Home({ arrivalsData, soundData, gamingData, applianceData, bannerData }) {

  return (
    <div>
      <Banner data={bannerData[0]} />
      <Container maxWidth='container.xl'>
        <Box mt={8}>
          <Heading textAlign='center'>New Arrivals</Heading>
          <Text textAlign='center' color='gray.500' fontSize='0.9rem'>Check out what we have in store for you</Text>
          <Box py={6} >
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap='1rem' py={4}>
              {arrivalsData.map((product, i) => <ProductCard key={product._id} product={product} />)}
            </Grid>
          </Box>
        </Box>
        <Box mt={8}>
          <Heading textAlign='center'>Hear the Sound</Heading>
          <Text textAlign='center' color='gray.500' fontSize='0.9rem'>Check out the latest sound players</Text>
          <Box py={6} >
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap='1rem' py={4}>
              {soundData.map((product, i) => <ProductCard key={product._id} product={product} />)}
            </Grid>
          </Box>
        </Box>
        <Box mt={8}>
          <Heading textAlign='center'>Game the Gamer</Heading>
          <Text textAlign='center' color='gray.500' fontSize='0.9rem'>Enter the world of games with our gaming products</Text>
          <Box py={6} >
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap='1rem' py={4}>
              {gamingData.map((product, i) => <ProductCard key={product._id} product={product} />)}
            </Grid>
          </Box>
        </Box>
        <Box mt={8}>
          <Heading textAlign='center'>Home Keepers</Heading>
          <Text textAlign='center' color='gray.500' fontSize='0.9rem'>Check out our latest home appliances</Text>
          <Box py={6} >
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap='1rem' py={4}>
              {applianceData.map((product, i) => <ProductCard key={product._id} product={product} />)}
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export const getServerSideProps = async () => {
  const arrivalsQuery = '*[_type == "product"][0..4]{_id, slug, productName, oldPrice, price, image}';
  const arrivalsData = await client.fetch(arrivalsQuery);

  const soundQuery = '*[_type == "product" && category in ["headphone", "earphones", "speaker", "earpods" ]]{_id, slug, productName, oldPrice, price, image}';
  const soundData = await client.fetch(soundQuery);

  const gamingQuery = '*[_type == "product" && category == "gaming" ]{_id, slug, productName, oldPrice, price, image}';
  const gamingData = await client.fetch(gamingQuery);

  const applianceQuery = '*[_type == "product" && category == "appliance" ]{_id, slug, productName, oldPrice, price, image}';
  const applianceData = await client.fetch(applianceQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { arrivalsData, soundData, gamingData, applianceData, bannerData }
  }
}
