import { Flex, Text, VStack, Spacer, Image } from "@chakra-ui/react";
import { SMButton } from "../../styled/Chakra.custom";
import React from "react";

import * as SMIcons from "../../assets";

const Index = () => {
  return (
    <Flex
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      w="100%"
      h="500px"
    >
      <Image
        position="absolute"
        left="600px"
        top="0px"
        src={SMIcons.BlueCircle}
        zIndex="-2"
      />
      <Image
        position="absolute"
        left="250px"
        top="100px"
        w="450px"
        src={SMIcons.GreenCircle}
        zIndex="-2"
      />
      <VStack
        className="main-object"
        justifyContent="center"
        rounded="full"
        h="300px"
        w="300px"
        position="relative"
        zIndex="1"
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
