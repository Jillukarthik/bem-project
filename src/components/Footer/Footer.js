import React from "react";
import "./Footer.css";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import {TriangleUpIcon} from "@chakra-ui/icons"
function Footer() {
  return (
    <Box className="footer">
      <Flex className="footer__menu">
        <Box>Privacy Policy | Term of use</Box>
        <Spacer />
        <Box> <TriangleUpIcon/> | This website was designed with XXY.</Box>
        <Spacer/>
        <Box>© 2006 - 2023 XXY.com, Inc</Box>
      </Flex>
    </Box>
  );
}

export default Footer;
