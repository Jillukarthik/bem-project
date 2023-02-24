import { Box, Heading, Flex, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";
import "./About.css";
function About() {
  return (
    <Box className="about">
      <Flex className="about__data">
        <Box className="about__imagedata">
          <img src="https://roaring-lokum-14859c.netlify.app/img/main-img.jpeg" alt="aboutimage" className="about__image"/>
        </Box>
<Spacer/>
        <Box className="about__details">
          <Heading as="h1" className="about__title">About Me</Heading>
          <Heading as="h6" className="about__role">Developer & Designer</Heading>
          <Heading as="p" className="about__disc">
            I am a front-end web developer. I can provide clean code and pixel
            perfect design. I also make the website more & more interactive with
            web animations.I can provide clean code and pixel perfect design. I
            also make the website more & more interactive with web animations.A
            responsive design makes your website accessible to all users,
            regardless of their device.
          </Heading>
          <Button className="aboutbtn aboutbtn--state-talk">Lets Talk</Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
