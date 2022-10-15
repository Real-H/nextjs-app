import React from "react";
import { Box, Container, Flex, Spacer, Heading, IconButton } from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { BsGithub, BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <Box backgroundColor={"#293241"}>
      <Container maxW="8xl" p="5">
        <Flex 
        color={"white"}
        align='center'
        justify={'center'}
        >
          <Box>
            <Heading 
            fontSize={'2xl'}
            >Logo</Heading>
          </Box>
          <Spacer />
          <Box> Copyright 2021. All right reserved</Box>
          <Spacer />
          <Box>
            <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#EE6C4D" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#EE6C4D" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#EE6C4D" }}
                      icon={<BsDiscord size="28px" />}
                    />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
