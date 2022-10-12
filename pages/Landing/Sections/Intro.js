import React from "react"
import { Grid,GridItem, Stack, Heading, Text, Image } from "@chakra-ui/react"
import ME from '../../../public/Group-132.png'
const Intro = () =>{
    return(
        <Grid templateColumns='repeat(2,1fr)'>
            <GridItem p='5'>
                <Stack>
                    <Heading>
                    Create your website in <Text color='orange' fontWeight='bold'>less than 12days</Text>
                    </Heading>
                </Stack>
                <Stack>
                    <Text>Hey, I’m Hassaan Ahmad. A fullstack web developer with 7 years experience building successful websites and applications. I can build a high converting website for you as quick as possible!</Text>
                </Stack>
            </GridItem>
            <GridItem>
                <Image src={ME} alt='picture' />
            </GridItem>
        </Grid>
    )
}
export default Intro