import React from "react";
import {
  Box,
  Container,
  Stack,
  Heading,
  Image,
  AspectRatio,
  Text,
} from "@chakra-ui/react";
const Worked = () => {
  return (
    <Box backgroundColor={"#2F3746"}>
      <Container maxW="8xl" p="5">
        <Box align={"center"} justify="center">
          <Stack>
            <Heading
              color="white"
              p={"5"}
              borderBottom="3px solid #EE6C4D"
              borderRadius={"10%"}
              fontSize={{ sm: "2xl", md: "4xl" }}
              fontWeight="medium"
            >
              Companies I Have Worked For
            </Heading>
          </Stack>
          <Stack p={"5"} pt="10">
            <Image
              src="/worked.png"
              alt="companies I have worked with"
              maxH={"70px"}
              maxW="=600px"
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
export default Worked;
