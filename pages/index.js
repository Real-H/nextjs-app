import { Container, Box } from "@chakra-ui/react";
// import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Worked from "../components/Worked";
import Work from "../components/Work";
import Testamonials from "../components/Testamonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Worked />
      <Work />
      <Testamonials />
      <Contact />
      <Footer />
    </>
  );
}
