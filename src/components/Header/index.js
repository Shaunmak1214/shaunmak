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
      px="1rem"
    >
      <SMLink size="sm">Portfolio</SMLink>
      <SMButton
        onClick={() => {
          window.location.href = "https://www.linkedin.com/in/yenweimak/";
        }}
        type="outlined"
      >
        Connect with me
      </SMButton>
    </HStack>
  );
};

export default Index;
