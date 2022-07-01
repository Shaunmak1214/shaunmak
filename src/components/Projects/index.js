import {
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as SMIcons from "../../assets";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "./index.css";

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

const Index = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  let projectData = [
    {
      name: "META BUNNIES CLUB",
      type: "NFT Smart Contract / Web Application",
      description:
        "Meta Bunnies Club is the first NFT collection fully crafted by hand drawing on the Ethereum blockchain.",
      images: [
        "https://res.cloudinary.com/shaun-storage/video/upload/v1656642774/mtbc/Screen_Recording_2022-07-01_at_10.27.44_AM_cekea8.mp4",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1656642661/mtbc/Image_01-07-2022_at_10.28_AM_frndh2.jpg",
      ],
      link: "https://www.metabunniesclub.com/",
    },
    {
      name: "Tech Career Days 2022 Resume Portal",
      type: "Web Application / Express API",
      description:
        "Tech Career Days 2022 is an annual two-day tech job fair organized by IT Society MMU Cyberjaya. ",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435792/Image_05-03-2022_at_7.12_AM_vqhwhu.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435792/Image_05-03-2022_at_7.13_AM_myxdt9.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435792/Image_05-03-2022_at_7.13_AM_1_cntas6.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435792/Image_05-03-2022_at_7.14_AM_aucdn4.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435792/Image_05-03-2022_at_7.13_AM_2_zsj7wm.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435793/Image_05-03-2022_at_7.15_AM_i4ubkk.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435793/Image_05-03-2022_at_7.15_AM_1_kg8e1n.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435793/Image_05-03-2022_at_7.15_AM_2_uozcwu.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435792/Image_05-03-2022_at_7.13_AM_3_s9lku0.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1647165957/Image_13-03-2022_at_6.01_PM_bouz9s.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1647165957/Image_13-03-2022_at_6.04_PM_j6qpp1.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1647165957/Image_13-03-2022_at_6.03_PM_mlgdx7.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1647165957/Image_13-03-2022_at_6.02_PM_oylo0n.jpg",
      ],
      link: "https://www.techcareerdays.com",
    },
    {
      name: "Codenection 2021",
      type: "Web Application / Microservices",
      description:
        "CodeNection 2021 is a programming-focused event organized by IT Society MMU Cyberjaya that includes a series of algorithm workshops and hackathons.",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435380/Image_05-03-2022_at_6.57_AM_vhkdei.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435379/Image_05-03-2022_at_7.03_AM_syv2qq.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435380/Image_05-03-2022_at_7.00_AM_liwkl4.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435379/Image_05-03-2022_at_7.01_AM_nprbbo.jpg",
      ],
      link: "https://www.itscodenection.com",
    },
    {
      name: "Barcamp 2021",
      type: "Web Application / Express API",
      description:
        "BarCamp Cyberjaya is an annual user-generated unconference with topics surrounding technology and entrepreneurship.",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435389/Image_05-03-2022_at_7.03_AM_1_srapmw.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435389/Image_05-03-2022_at_7.04_AM_j1bbxi.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435389/Image_05-03-2022_at_7.06_AM_voh5n6.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435388/Image_05-03-2022_at_7.06_AM_1_peqncv.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435388/Image_05-03-2022_at_7.06_AM_2_kb1fvh.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435389/Image_05-03-2022_at_7.06_AM_3_qpglke.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435389/Image_05-03-2022_at_7.07_AM_inknxq.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1646435389/Image_05-03-2022_at_7.07_AM_1_esqjyr.jpg",
      ],
      link: "https://www.barcampcyberjaya.com",
    },
    {
      name: "SambalSOS",
      type: "Web Application / PWA",
      description:
        "SambalSOS is a web application that allows users to create and share geospatial data in the form of web services.",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628023384/DC449CCC-F237-4FA5-91AC-0EAB36717A80_u88iij.jpg",
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628023384/76D93D42-56B3-4518-81AC-9AF84E709B40_pvu80c.jpg",
      ],
      link: "https://www.sambalsos.com",
    },
    {
      name: "Customeet",
      type: "Chrome Extension",
      description:
        "This extension helps you customize your google meet in your own way ! In this extension, we provide a solution for users to customize the look and feel on their google meets.",
      images: [
        "https://lh3.googleusercontent.com/6F2mqRayTYxo4ha-xcmFr3RFCWijbWO1VXkq8bwjkB-XTjr9jBeU6T3ue3pqbw8VVuUPqGk_m841w6GiaMmJQfhYRg=w640-h400-e365-rj-sc0x00ffffff",
        "https://lh3.googleusercontent.com/O5FkaZaUN3PCL_NX3SjVVblkQJtdTnaH55QxiXcBlWhoqyQmxQgRFCYDknY0YsRB_vo2LR8JcfmqK4-HYd79ONONYA=w640-h400-e365-rj-sc0x00ffffff",
      ],
      link: "https://chrome.google.com/webstore/detail/customeet/mnhmiianlmpgpmallbgfeklmoenjljbm",
    },
    {
      name: "Common Sans",
      type: "Web Application",
      description:
        "A web application that allows users to create and share geospatial data in the form of web services.",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628078469/unknown_v4djep.jpg",
      ],
      link: "#",
    },
    {
      name: "Vending.js",
      type: "Web Application",
      description:
        "A web application that allows users to create and share geospatial data in the form of web services.",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628029432/vendingjs-1_wsc8lw.png",
      ],
      link: "#",
    },
    {
      name: "FlashLives",
      type: "Web Application",
      description:
        "An (Airbnb clone) Hotel, homestay booking webapp written in pure php and implemented Google Oauth, Facebook login Auth, Google maps searches and Machine learning image auto tagging",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628278802/flashlives-1_igcw4o.png",
      ],
      link: "http://flashlives.herokuapp.com/Customer/dashboard/",
    },
    {
      name: "NUA",
      type: "Mobile Application & Discord Bots",
      description:
        "A streamline of services from discord bots to mobile application with a purpose of delivering latest space related news to users",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628278801/nua-1_z4ojh0.png",
      ],
      link: "#",
    },
    {
      name: "DSC Kita Hack 2021 Website",
      type: "Static Website",
      description:
        "Static website that serves the purpose of promoting the event and handling registrations",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628278801/dsc-1_v9yk6r.png",
      ],
      link: "https://dscmalaysia.github.io/dsckitahack2021/",
    },
    {
      name: "Tech Career Days 2020/21",
      type: "Web Application",
      description:
        "A website to promote Tech Career Days 2021 alongside with a webapp built for companies to accept, reject, star submitted resumes",
      images: [
        "https://res.cloudinary.com/shaun-storage/image/upload/v1628278801/tcd-1_gfk9pr.png",
      ],
      link: "https://techcareerdays.com/",
    },
  ];
  const ProjectCards = ({
    name,
    type,
    images,
    description,
    link,
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
            autoplay={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            style={{
              position: "relative",
            }}
          >
            {images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <a
                    className="venobox"
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt={name}
                  >
                    {image.includes(".mp4") ? (
                      <video width="100%" height="100%" autoplay>
                        <source src={image} type="video/mp4" />
                      </video>
                    ) : (
                      <Image key={index} src={image} rounded="xl" />
                    )}
                  </a>
                </SwiperSlide>
              );
            })}

            <IconButton
              size={"sm"}
              ref={navigationPrevRef}
              aria-label="Prev Slide"
              icon={<ChevronLeftIcon />}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "10px",
                zIndex: 1001,
                backgroundColor: "#ffffff",
                borderRadius: "50%",
                boxShadow: "0px 0px 10px #e9e9e9",
              }}
            />
            <IconButton
              size={"sm"}
              ref={navigationNextRef}
              aria-label="Next Slide"
              icon={<ChevronRightIcon />}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "25px",
                zIndex: 1001,
                backgroundColor: "#ffffff",
                borderRadius: "50%",
                boxShadow: "0px 0px 10px #e9e9e9",
              }}
            />
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
          <Image
            onClick={() => {
              window.location.href = link;
            }}
            src={SMIcons.RightArrow}
            alt="right arrow"
          />
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
          link={project.link}
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
