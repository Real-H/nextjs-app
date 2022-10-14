import React from "react";
import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box backgroundColor={"#293241"}>
      <Container maxW="8xl" p="5">
        <Flex p="3" color={"white"}>
          <Box>
            <Text>Logo</Text>
          </Box>
          <Spacer />
          <Box>Coptrights</Box>
          <Spacer />
          <Box>
            <Text>Contact me on my socials</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
