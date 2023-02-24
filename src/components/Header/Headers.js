import React from "react";
import "./Header.css";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

function Headers() {
  return (
    <Box className="header">
      <Flex className="header__items">
        <Box className="header__item">
          <Heading as="h1" className="header__logo">
            Portfolio
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup className="header__item">
          <Button className="btn btn--state-hireme">Hire me</Button>
          <Button className="btn btn--state-freelancer">Freelancer</Button>
        </ButtonGroup>
      </Flex>
      <Flex>
      <Box className="headerinfo">
        <Heading as="h6" className="headerinfo__intro">Hello, My name is</Heading>
        <Heading as="h1" className="headerinfo__name">
          Karthik <Heading as="span" className="headerinfo__nameinit">S</Heading>
        </Heading>
        <Heading as="h3" className="headerinfo__disc">I'am a Web developer</Heading>
        <InputGroup className="headerinfo__inputgroup">
        
          <Input type="email" placeholder="Enter your email" className="headerinfo__input"/>
          <InputRightAddon children='Lets start' className="headerinfo__input--icon" />
        </InputGroup>
      </Box>
      </Flex>
    </Box>
  );
}

export default Headers;
