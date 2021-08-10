import React from "react";
import { Flex, IconButton, Text, VStack, HStack } from "@chakra-ui/react";
import { SMButton } from "../../styled/Chakra.custom";
import * as SMIcons from "../../assets";
import { SvgToComponent } from "../../utils";

const Index = () => {
  const SocialIconsRenderer = () => {
    let socialData = [
      {
        name: "Facebook",
        icon: SMIcons.Facebook,
        link: "https://www.facebook.com/mak0408/",
      },
      {
        name: "Instagram",
        icon: SMIcons.Instagram,
        link: "https://www.instagram.com/shaun_1214/",
      },
      {
        name: "LinkedIn",
        icon: SMIcons.LinkedIn,
        link: "https://www.linkedin.com/in/yenweimak/",
      },
      {
        name: "Github",
        icon: SMIcons.GithubSocial,
        link: "https://github.com/Shaunmak1214",
      },
      {
        name: "Whatsapp",
        icon: SMIcons.Whatsapp,
        link: "https://api.whatsapp.com/send/?phone=%2B60189495849&app_absent=0",
      },
    ];

    return socialData.map((social, index) => {
      return (
        <IconButton
          key={index}
          aria-label="Search database"
          p="8px"
          rounded="md"
          icon={<SvgToComponent svg={social.icon} />}
          size="sm"
          onClick={() => {
            window.location.href = social.link;
          }}
        />
      );
    });
  };
  return (
    <VStack spacing="0" mt="100" w="100%">
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        p="1rem"
        bg="accent"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          maxW="container.xl"
          flexDir={["column", null, "row"]}
        >
          <Text fontSize="xl" mb={["3", null, "0"]}>
            Wan't to know more about me?
          </Text>
          <SMButton type="special">Reach me</SMButton>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        maxW="container.xl"
        p="1rem"
        flexDir={["column", null, "row"]}
      >
        <Text
          textAlign={["center", null, "left"]}
          w="100%"
          fontSize="sm"
          fontWeight="300"
          color="#797979"
          mt={["3", null, "0"]}
          mb={["3", null, "0"]}
        >
          All Rights Reserved © 2021 | Shaun Mak
        </Text>
        <HStack justifyContent={["center", null, "flex-end"]} w="100%" h="100%">
          <SocialIconsRenderer />
        </HStack>
      </Flex>
    </VStack>
  );
};

export default Index;
