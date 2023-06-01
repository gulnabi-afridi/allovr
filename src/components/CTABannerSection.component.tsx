import React from "react";
import { Container, Title, Button, Text, Box } from "@mantine/core";
import ArrowDown from "../assets/Icons/arrow-down.svg";
export const CTABannerSection = () => {
  return (
    <div className="w-screen px-4">
    <Container className="max-w-7xl mt-[130px] bg-yellow h-[278px] flex flex-col justify-center items-center relative rounded-lg">
      <Box className="absolute yellow-gradient -top-[55px] w-full h-16 rotate-bg "></Box>
      <Text className=" lg:text-6xl text-[40px] leading-10 text-center text-dark font-semibold">
        Start your action now!
      </Text>
      <div className="grid lg:flex lg:items-center lg:flex-wrap lg:grid-cols-2 gap-4 lg:gap-2 mt-[33px] overflow-hidden">
        <Button
          className="bg-dark border-0 text-white text-[16px] font-medium"
          radius={100}
          variant="outline"
          rightIcon={<img src={ArrowDown} alt="Arrow Up" />}
        >
          STAKE AOVR NOW
        </Button>
        <Button
          variant="outline"
          radius={100}
          className="border-white text-dark text-[16px]  px-[16px]"
        >
          WITHDRAW AOVR
        </Button>
      </div>
    </Container>
    </div>
  );
};
