import React from "react";
import "./Footer.css";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { TriangleUpIcon } from "@chakra-ui/icons";


function Footer() {
  return (
    <Box className="footer">
      <Flex className="footer__items">
      <Spacer />
        <Box className="footer__item">Privacy Policy | Term of use</Box>
        <Spacer />
        <Box className="footer__item">
          {" "}
          <TriangleUpIcon /> | TECH STACK
        </Box>
        <Spacer />
        <Box className="footer__item">© 2006 - 2023 TECHSTACK.com, Inc</Box>
        <Spacer/>
      </Flex>
    </Box>
  );
}

export default Footer;
