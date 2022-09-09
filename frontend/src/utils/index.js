import { Image } from "@chakra-ui/react";
import React from "react";

const SvgToComponent = ({ svg }) => {
  return <Image src={svg} alt={"Heh"}></Image>;
};

export { SvgToComponent };
