import { ReactNode } from "react";
import {
  Container,
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "About Me", "Works", "Blogs"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("orange.400", "orange.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box backgroundColor="#3D5A80">
        <Container maxW="8xl" p="5">
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent="space-between"
            p="5"
            borderBottom="2px solid #2A3E57"
            color={"white"}
          >
            <IconButton
              backgroundColor={"orange.400"}
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Box>Logo</Box>
            <HStack spacing={8} alignItems={"center"}>
              {/* <Menu>
                <MenuDivider />
              </Menu> */}
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
                <Button colorScheme={"orange"}>Get In Touch</Button>
              </HStack>
            </HStack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }} textAlign="center">
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
                <Button colorScheme={"orange"}>Get In Touch</Button>
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
}
