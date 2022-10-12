import { Container, Box } from '@chakra-ui/react'
import Header from '../components/Header'
import Landing from '../pages/Landing/Landing.js'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Box backgroundColor='#3D5A80'>
      <Container as='main' maxW='8xl' p='5'>
        <Header />
        <Landing />
        <Footer />
      </Container>
    </Box>

  )
}
