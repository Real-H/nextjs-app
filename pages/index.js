import { Container, Box } from '@chakra-ui/react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Work from '../components/Work'
import Testamonials from '../components/Testamonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <Box backgroundColor='#3D5A80'>
        <Header />
        <Intro />
        <About />
        <Work />
        <Testamonials />
        <Contact />
        <Footer />
    </Box>

  )
}
