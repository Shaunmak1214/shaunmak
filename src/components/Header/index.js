import React from "react";
import { HStack } from "@chakra-ui/react";
import { SMButton, SMLink } from "../../styled/Chakra.custom";

const Index = () => {
  return (
    <HStack
      justifyContent="flex-end"
      alignItems="center"
      padding="1.5rem"
      w="100%"
      spacing="10"
    >
      <SMLink size="xs">About Me</SMLink>
      <SMLink size="xs">Portfolio</SMLink>
      <SMLink size="xs">Contact</SMLink>
      <SMButton type="outlined">Connect with me</SMButton>
    </HStack>
  );
};

export default Index;
