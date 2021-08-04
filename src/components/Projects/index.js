import {
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import * as SMIcons from "../../assets";

const Index = () => {
  let projectData = [
    {
      name: "SambalSOS",
      type: "Web Application / PWA",
      description:
        "SambalSOS is a web application that allows users to create and share geospatial data in the form of web services.",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628023384/DC449CCC-F237-4FA5-91AC-0EAB36717A80_u88iij.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628023384/76D93D42-56B3-4518-81AC-9AF84E709B40_pvu80c.jpg",
      ],
    },
    {
      name: "Common Sans",
      type: "Web Application",
      description:
        "A web application that allows users to create and share geospatial data in the form of web services.",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628078469/unknown_v4djep.jpg",
      ],
    },
    {
      name: "Vending.js",
      type: "Web Application",
      description:
        "A web application that allows users to create and share geospatial data in the form of web services.",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628029432/vendingjs-1_wsc8lw.png",
      ],
    },
  ];
  const ProjectCards = ({ name, type, images, description }) => {
    let projectCartStyle = {
      background: "rgba(255, 255, 255, 0.5)",
      boxShadow: "0px 16px 49px rgba(197, 197, 197, 0.25)",
      borderRadius: "15px",
    };
    let projectCartTopBarStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    };
    return (
      <VStack
        spacing="5"
        p="1.5rem"
        h="100%"
        w="100%"
        maxW="90%"
        justifySelf="center"
        cursor="pointer"
        sx={projectCartStyle}
      >
        <Flex w="100%" sx={projectCartTopBarStyle}>
          <Text>{type}</Text>
        </Flex>
        <HStack
          spacing="10"
          justifyContent="center"
          w="100%"
          maxW="100%"
          h="300px"
        >
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                height="100%"
                width="auto"
                rounded="xl"
              />
            );
          })}
        </HStack>

        <HStack
          justifyContent="space-between"
          marginTop="20"
          w="100%"
          maxW="100%"
        >
          <Text fontSize="28" fontWeight="600">
            {name}
          </Text>
          <Image src={SMIcons.RightArrow} alt="right arrow" />
        </HStack>
        <Text textAlign="left" color="#797979">
          {description}
        </Text>
      </VStack>
    );
  };

  const ProjectCardsRenderer = () => {
    return projectData.map((project, index) => {
      return (
        <ProjectCards
          name={project.name}
          type={project.type}
          images={project.images}
          description={project.description}
          key={index}
        />
      );
    });
  };

  return (
    <Flex flexDir="column" alignItems="center" mt="100">
      <Text fontSize="25" fontWeight="bold" color="#606060">
        Notable Projects
      </Text>
      <SimpleGrid spacing="10" mt="100" w="100%" columns={[1, null, 2]}>
        <ProjectCardsRenderer />
      </SimpleGrid>
    </Flex>
  );
};

export default Index;
