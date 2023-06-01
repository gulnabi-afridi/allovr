import React from "react";
import { Header } from "./Header.component";
import { Container, Title, Text, Button } from "@mantine/core";
import RightIcon from "../assets/rightIcon.svg";
import HeroImg from "../assets/HeroImg.png";

export const HeroSection = () => {
  return ( 
    <section className={`relative hero-bg`}>
      <Header />

      <Container className="h-screen max-w-7xl mt-8 lg:-mt-12 relative grid lg:grid-cols-3 items-center">
        <div>
          <Title className="text-center lg:text-left uppercase text-6xl lg:text-8xl font-semibold">
            Stake <br /> <span className="text-yellow">Allovr.</span>
          </Title>
          <Text className="text-center lg:text-left mx-auto text-xl lg:text-3xl font-normal mt-6 max-w-lg">
            This is the best time to get the earnings you dream of.
          </Text>
          <div className="flex justify-center lg:justify-start">
            <Button
              radius={100}
              className="btn-outline-white mt-8 px-4 h-[42px]"
              variant="outline"
              rightIcon={<img src={RightIcon} className="" alt="Right Icon" />}
            >
              Scroll Down
            </Button>
          </div>
        </div>
        <div className="lg:col-span-2">
          <img src={HeroImg} alt="Hero" className="w-full" />
        </div>
      </Container>
    </section>
  );
};
