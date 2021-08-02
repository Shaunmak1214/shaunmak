import React from "react";
import { HStack } from "@chakra-ui/react";
import { SMButton, SMLink } from "../../styled/Chakra.custom";

const Index = () => {
  return (
    <HStack
      justifyContent="flex-end"
      alignItems="center"
      py="2.5rem"
      w="100%"
      spacing="10"
    >
      <SMLink size="sm">About Me</SMLink>
      <SMLink size="sm">Portfolio</SMLink>
      <SMLink size="sm">Contact</SMLink>
      <SMButton type="outlined">Connect with me</SMButton>
    </HStack>
  );
};

export default Index;
