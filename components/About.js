import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Stack,
  Heading,
  Text,
  Hide,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
const About = () => {
  return (
    <Box backgroundColor={"#293241"}>
      <Container maxW="8xl" p="5">
        <Grid
          gridTemplateColumns={"repeat(2,1fr)"}
          alignItems={"center"}
          justifyContent="center"
        >
          <Hide below="md">
            <GridItem p={"10"}>
              <Stack p="4">
                <AspectRatio maxW="500px">
                  <Image
                    src="/about-logos.png"
                    alt="picture"
                    // boxSize={"cover"}
                    fit={"cover"}
                    //   boxSize="450px"
                    alignSelf="center"
                  />
                </AspectRatio>
              </Stack>
            </GridItem>
          </Hide>
          <GridItem color={"white"} colSpan={{ base: 2, md: 1 }}>
            <Box p="8">
              <Stack>
                <Heading p={"3"} borderBottom="2px solid #EE6C4D">
                  About Me
                </Heading>
                <Stack>
                  <Text>
                    My passion for building websites started since 2013 and
                    since then i have helped companies around the world build
                    amazing websites and products that create real value for the
                    business and users.
                  </Text>
                </Stack>
                <Stack>
                  <Text>
                    I enjoy solving problems with clean scalable solutions and I
                    also have a genuine passion for inspiring design.
                  </Text>
                </Stack>
                <Stack>
                  <Text>
                    I am a fullstack developer focusing on core frontend and
                    backend technologies which include HTML, CSS, Javascript,
                    React and other core languages
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
export default About;
