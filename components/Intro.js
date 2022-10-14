import React from "react";
import {
  Grid,
  GridItem,
  Stack,
  Heading,
  Text,
  Image,
  Button,
  Container,
  Box,
  AspectRatio,
  Hide,
} from "@chakra-ui/react";
const Intro = () => {
  return (
    <Box backgroundColor="#3D5A80">
      <Container maxW="8xl" p="5">
        <Grid
          templateColumns="repeat(2,1fr)"
          gap="10"
          alignItems={"center"}
          justifyContent="center"
        >
          <GridItem p="5" ps={"10"} colSpan={{ base: 2, md: 1 }}>
            <Stack p="10" color={"white"}>
              <Stack>
                <Heading>
                  Create your website in{" "}
                  <Text color="orange.500" fontWeight="bold">
                    less than 12days
                  </Text>
                </Heading>
              </Stack>
              <Stack pt="4">
                <Text pb="2">
                  Hey, I’m Hassaan Ahmad. A fullstack web developer with 7 years
                  experience building successful websites and applications. I
                  can build a high converting website for you as quick as
                  possible!
                </Text>
                <Button
                  backgroundColor="orange.500"
                  width="-webkit-max-content"
                >
                  Get In Touch
                </Button>
              </Stack>
            </Stack>
          </GridItem>
          <Hide below="md">
            <GridItem>
              <Stack p="4">
                <AspectRatio maxW="550px">
                  <Image
                    src="/me.png"
                    alt="picture"
                    //   boxSize="450px"
                    alignSelf="center"
                  />
                </AspectRatio>
              </Stack>
            </GridItem>
          </Hide>
        </Grid>
      </Container>
    </Box>
  );
};
export default Intro;
