import { Circle, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import * as SMIcons from "../../assets";

const Index = () => {
  let circleStyle = {
    marginTop: "-50px",
  };
  let cardStyle = {
    background: "#FDFEFE",
    shadow: "0px 16px 40px rgba(223, 223, 223, 0.8)",
    rounded: "20px",
    padding: "1.5rem",
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <SimpleGrid
      spacing="20"
      mt={["0", null, "100"]}
      w="100%"
      columns={[1, null, 3]}
      padding={["1rem", null, "0rem"]}
    >
      <VStack
        data-aos={"fade-up"}
        data-aos-duration={"1500"}
        mb="10"
        spacing="5"
        alignItems="center"
        sx={cardStyle}
      >
        <Circle padding="20px 25px" bg="secondary" sx={circleStyle}>
          <Image w="30" h="30" src={SMIcons.Experience} alt="Experience" />
        </Circle>
        <Text fontSize="25" fontWeight="bold">
          <CountUp
            start={0}
            end={1.4}
            separator="."
            decimals={1}
            duration={1}
          />
        </Text>
        <Text>Years Learnt</Text>
      </VStack>
      <VStack
        data-aos={"fade-up"}
        data-aos-duration={"1500"}
        data-aos-delay={"500"}
        mb="10"
        spacing="5"
        alignItems="center"
        sx={cardStyle}
      >
        <Circle padding="20px 25px" bg="secondary" sx={circleStyle}>
          <Image w="30" h="30" src={SMIcons.Project} alt="Experience" />
        </Circle>
        <Text fontSize="25" fontWeight="bold">
          <CountUp start={0} end={10} duration={1} />
        </Text>
        <Text>Notable Projects</Text>
      </VStack>
      <VStack
        data-aos={"fade-up"}
        data-aos-duration={"1500"}
        data-aos-delay={"1000"}
        mb="10"
        spacing="5"
        alignItems="center"
        sx={cardStyle}
      >
        <Circle padding="20px 25px" bg="secondary" sx={circleStyle}>
          <Image w="30" h="30" src={SMIcons.Github} alt="Experience" />
        </Circle>
        <Text fontSize="25" fontWeight="bold">
          <CountUp start={0} end={120} duration={1} />
        </Text>
        <Text>Repositories</Text>
      </VStack>
    </SimpleGrid>
  );
};

export default Index;
