import React from "react";
import { Button, Link, Text } from "@chakra-ui/react";

const SMLink = ({ size, children }) => {
  let linkStyle = {};
  return (
    <Link sx={linkStyle}>
      <Text size={size}>{children}</Text>
    </Link>
  );
};

const SMButton = ({ type, children }) => {
  let buttonStyle = {
    shadow: "sm",
    rounded: "lg",
    bg: "white",
    padding: "1rem",
    border: "1px solid #8093BF",
  };

  if (type === "outlined") {
    return (
      <Button bg="primary" size="xs" sx={buttonStyle}>
        {children}
      </Button>
    );
  } else {
    return <Button size="xs">{children}</Button>;
  }
};

export { SMLink, SMButton };
