import React from "react"
import { Box } from "@chakra-ui/react"
import Intro from "./Sections/intro.js"
import About from "./Sections/about.js"
import Work from "./Sections/work.js"
import Testamonials from "./Sections/testamonials.js"
import Contact from "./Sections/contact.js"
const Landing = () =>{
    return(
        <Box>
            <Intro />
            <About />
            <Work />
            <Testamonials />
            <Contact />
        </Box>
    )
}
export default Landing