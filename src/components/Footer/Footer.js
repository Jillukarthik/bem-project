import React from "react";
import "./Footer.css";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { TriangleUpIcon } from "@chakra-ui/icons";
function Footer() {
  return (
    <Box className="footer">
      <Flex className="footer__items">
        <Box className="footer__item">Privacy Policy | Term of use</Box>
        <Spacer />
        <Box className="footer__item">
          {" "}
          <TriangleUpIcon /> | This website was designed with XXY.
        </Box>
        <Spacer />
        <Box className="footer__item">© 2006 - 2023 XXY.com, Inc</Box>
      </Flex>
    </Box>
  );
}

export default Footer;
