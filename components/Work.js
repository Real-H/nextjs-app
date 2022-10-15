import React from "react";
import {
  Box,
  Container,
  Stack,
  Heading,
  Grid,
  GridItem,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
const Work = () => {
  return (
    <Box backgroundColor={"#293241"}>
      <Container maxW="8xl" p="5">
        <Stack color="white" p={"5"}>
          <Heading fontWeight={"medium"}>My Recent Work</Heading>
          <Stack borderBottom={"3px solid #EE6C4D"} maxW="250px"></Stack>
        </Stack>
        <Grid
          color="white"
          templateColumns={"repeat(3,1fr)"}
          justifyItems="center"
          //   templateRows="repeat(2,1fr)"
          //   gridColumn={{ base: 1, md: 2, md: 3 }}
          p={"5"}
          gap={"7"}
        >
          <GridItem>
            <Text py={'2'}>Ecommerce Landing page</Text>
            <Image src="/Rectangle0.png" />
          </GridItem>
          <GridItem>
            <Text py={'2'}>Ecommerce Landing page</Text>
            <Image src="/Rectangle1.png" />
          </GridItem>
          <GridItem>
            <Text py={'2'}>Ecommerce Landing page</Text>
            <Image src="/Rectangle2.png" />
          </GridItem>
          <GridItem>
            <Text py={'2'}>Ecommerce Landing page</Text>
            <Image src="/Rectangle3.png" />
          </GridItem>
          <GridItem>
            <Text py={'2'}>Ecommerce Landing page</Text>
            <Image src="/Rectangle4.png" />
          </GridItem>
          <GridItem>
            <Text py={'2'}>Ecommerce Landing page</Text>
            <Image src="/Rectangle5.png" />
          </GridItem>
        </Grid>
        <Stack align="center" p={"7"}>
          <Button variant={"outline"} width="100px" colorScheme={"orange"}>
            See More
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
export default Work;
