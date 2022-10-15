import React from "react";
import { Box, Container, Flex, Spacer, Text, IconButton } from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { BsGithub, BsDiscord } from "react-icons/bs";

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
            <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsDiscord size="28px" />}
                    />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
