import React from "react";
import { Button, Link, Text } from "@chakra-ui/react";

const SMLink = ({ size, children }) => {
  let linkStyle = {};
  return (
    <Link sx={linkStyle}>
      <Text fontSize={size}>{children}</Text>
    </Link>
  );
};

const SMButton = ({ type, children }, props) => {
  let buttonStyle = {
    shadow: "sm",
    padding: "1rem",
    border: "1px solid #ABC4FF",
  };

  if (type === "outlined") {
    return (
      <Button size="xs" bg="transparent" sx={buttonStyle}>
        <Text fontSize="md" fontWeight="300">
          {children}
        </Text>
      </Button>
    );
  } else if (type === "special") {
    return (
      <Button bg="#8093BF" color="white" sx={buttonStyle}>
        <Text px="2rem" fontSize="md" fontWeight="bold">
          {children}
        </Text>
      </Button>
    );
  } else {
    return (
      <Button
        variant="solid"
        bg="primary"
        size="xs"
        sx={buttonStyle}
        {...props}
      >
        <Text fontSize="md" fontWeight="300">
          {children}
        </Text>
      </Button>
    );
  }
};

export { SMLink, SMButton };
