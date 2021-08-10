import { Flex, Text, VStack, Spacer, Image } from "@chakra-ui/react";
import { SMButton } from "../../styled/Chakra.custom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import * as SMIcons from "../../assets";

const Index = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Flex
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      w="100%"
      h="80vh"
    >
      <Image
        position="absolute"
        left={["200px", null, "600px"]}
        w={["150px", null, "300px"]}
        top={["100px", null, "0px"]}
        src={SMIcons.BlueCircle}
        zIndex="-2"
        data-aos={"fade-left"}
        data-aos-duration={"1000"}
      />
      <Image
        position="absolute"
        left={["25px", null, "250px"]}
        top={["325px", null, "100px"]}
        w={["100px", null, "450px"]}
        src={SMIcons.GreenCircle}
        zIndex="-2"
        data-aos={"fade-right"}
        data-aos-duration={"1000"}
      />
      <VStack
        className="main-object"
        justifyContent="center"
        rounded="full"
        h="300px"
        w="300px"
        position="relative"
        zIndex="1"
        data-aos={"fade-up"}
        data-aos-duration={"1500"}
      >
        <Text fontSize="3xl" as="h1" fontWeight="700">
          I'm Shaun Mak
        </Text>
        <Text fontSize="lg" fontWeight="200" color="CaptionText" as="h3">
          a Full Stack Developer
        </Text>
        <Spacer maxH="15px" />
        <SMButton type="solid" rounded="full">
          Connect with me
        </SMButton>
      </VStack>
    </Flex>
  );
};

export default Index;
