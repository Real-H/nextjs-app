import React from "react"
import {
    Button,
    Stack,
    HStack,
    Text,
    Box
  } from '@chakra-ui/react'
import Link from "next/link"
import styled from "@emotion/styled"

import DarkModeSwitch from "./DarkModeSwitch"

const Header = ({ children }) => {
    return(
        <HStack justifyContent='space-between' p='2' color='white' borderBottom='1px solid #2A3E57'>
            <Stack alignItems='center' ps='2'>
                <Text>LOGO</Text>
            </Stack>
            <Stack direction='row' alignItems='center' spacing='5'>
            <Box>
                <Text>Home</Text>
            </Box>
            <Box>
                <Text>About Me</Text>
            </Box>
            <Box>
                <Text>Works</Text>
            </Box>
            <Box>
                <Text>Blogs</Text>
            </Box>
            <Box>
                <Button colorScheme='orange'>Get In Touch</Button>
            </Box>
            </Stack>
        </HStack>
    )
}
export default Header