import {
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as SMIcons from "../../assets";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import "./index.css";

// install Swiper modules
SwiperCore.use([Pagination]);

const Index = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
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
    {
      name: "FlashLives",
      type: "Web Application",
      description:
        "An (Airbnb clone) Hotel, homestay booking webapp written in pure php and implemented Google Oauth, Facebook login Auth, Google maps searches and Machine learning image auto tagging",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628278802/flashlives-1_igcw4o.png",
      ],
    },
    {
      name: "NUA",
      type: "Mobile Application & Discord Bots",
      description:
        "A streamline of services from discord bots to mobile application with a purpose of delivering latest space related news to users",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628278801/nua-1_z4ojh0.png",
      ],
    },
    {
      name: "DSC Kita Hack 2021 Website",
      type: "Static Website",
      description:
        "Static website that serves the purpose of promoting the event and handling registrations",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628278801/dsc-1_v9yk6r.png",
      ],
    },
    {
      name: "Tech Career Days 2020/21",
      type: "Web Application",
      description:
        "A website to promote Tech Career Days 2021 alongside with a webapp built for companies to accept, reject, star submitted resumes",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628278801/tcd-1_gfk9pr.png",
      ],
    },
  ];
  const ProjectCards = ({
    name,
    type,
    images,
    description,
    aosDelay,
    pkey,
  }) => {
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
        key={pkey}
        spacing="5"
        p="1.5rem"
        h="100%"
        w="100%"
        maxW="90%"
        justifySelf="center"
        cursor="pointer"
        sx={projectCartStyle}
        data-aos={"fade-up"}
        data-aos-duration={"1500"}
        data-aos-delay={aosDelay}
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
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {images.map((image, index) => {
              return (
                <SwiperSlide>
                  <a className="venobox" href={image} alt={name}>
                    <Image key={index} src={image} rounded="xl" />
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </HStack>

        <HStack
          justifyContent="space-between"
          marginTop="20"
          w="100%"
          maxW="100%"
        >
          <Text textAlign="start" fontSize="28" fontWeight="600">
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
          aos-delay={index * 100}
          pkey={index}
          key={index}
        />
      );
    });
  };

  return (
    <Flex flexDir="column" alignItems="center" mt="100">
      <Text fontSize="35" fontWeight="bold" color="#000000">
        Notable Projects
      </Text>
      <SimpleGrid spacing="10" mt="50" w="100%" columns={[1, null, 2]}>
        <ProjectCardsRenderer />
      </SimpleGrid>
    </Flex>
  );
};

export default Index;
