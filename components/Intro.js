import React from "react"
import { Grid,GridItem, Stack, Heading, Text, Image, Button, Container } from "@chakra-ui/react"
const Intro = () =>{
    return(
        <Container maxW='8xl' p='5'>
            <Grid
        templateColumns='repeat(2,1fr)'
        column={{ base: 2, md: 1 }}
        gap='10'
        >
            <GridItem p='5'>
                <Stack p='10'>
                    <Stack>
                        <Heading
                        >
                        Create your website in <Text color='orange.500' fontWeight='bold'>less than 12days</Text>
                        </Heading>
                    </Stack>
                    <Stack 
                    pt='4'
                    >
                        <Text pb='2'>Hey, I’m Hassaan Ahmad. A fullstack web developer with 7 years experience building successful websites and applications. I can build a high converting website for you as quick as possible!</Text>
                        <Button 
                        backgroundColor='orange.500'
                        width='-webkit-max-content'
                        >
                            Get In Touch
                        </Button>
                    </Stack>
                </Stack>
            </GridItem>
            <GridItem>
                <Stack p='4'>
                    <Image src='/Group-132.png' alt='picture' boxSize='450px' />
                </Stack>
            </GridItem>
        </Grid>
        </Container>
    )
}
export default Intro