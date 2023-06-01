import React from "react";
import { Container, Title, Text } from "@mantine/core";
import StakingImg from "../assets/staking-illustration.png";
import { TextWithImage } from "./TextWithImage.component";

export const WhatIsStakingSection = () => {
  return (
    <>
      <TextWithImage
        heading="What is Staking?"
        subHeading={
          <Text className="text-base lg:text-xl text-gray-light mt-[16px] lg:mt-[24px]">
            Staking is when you lock AOVR tokens over a certain time span. In
            return, you receive a share of the weekly minted new
            <span className="font-bold text-white"> AVOR </span> tokens. While
            your tokens, are staked you cannot send them to other wallets cast
            votes wihte them in the
            <span className="font-bold text-white"> ALLOVR DAO </span> or make
            use of any other utility the tokens hold. However, it is completely
            up to you how many tokens if any you’d like to stake.
          </Text>
        }
        imgSrc={StakingImg}
      />
      <Container className="max-w-7xl">
        <Text className=" font-white max-w-[905px] text-2xl lg:text-3xl mt-6">
          - The number of{" "}
          <span className="text-yellow font-semibold">tokens</span> you gain
          from the weekly minted supply is proportional to the size of your
          stake compared to those of all others. The minimum staking period is
          oane wee after that you can withdraw your tokens{" "}
          <span className="text-yellow font-semibold">
            plus your earned interest
          </span>
          at any time.
        </Text>
      </Container>
    </>
  );
};
