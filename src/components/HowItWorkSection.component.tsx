import React from "react";
import { TextWithImage } from "./TextWithImage.component";
import { Container, Title, Button, Text } from "@mantine/core";
import howImg from "../assets/how-illustration.png";
import ArrowUp from "../assets/Icons/arrow-up.svg";

export const HowItWorkSection = () => {
  return (
    <>
      <TextWithImage
        imageOnRight={true}
        imgSrc={howImg}
        heading="How does it work?"
        subHeading={
          <Text className="text-base lg:text-xl text-gray-light mt-[16px] lg:mt-[24px]">
            The total AOVR supply is inflated with an additional 3% every year.
            The total <span className="font-bold text-white"> AVOR </span>{" "}
            supply is inflated with an additional 3% every year. This inflation
            happens in weekly increments, paid out to everyone in the community
            with staked AOVR tokens at the time of payout and proportional to
            the amount staked.
            <Text className="text-base lg:text-xl text-gray-light mt-[16px] lg:mt-[24px]">
              All staked tokens are held by the{" "}
              <span className="font-bold text-white"> AVOR </span> Staking
              treasury, with is controled by the{" "}
              <span className="font-bold text-white"> AVOR </span> and therefore
              secured against malicious behavior by the{" "}
              <span className="font-bold text-white"> AVOR </span> community.{" "}
            </Text>
          </Text>
        }
      />
      <Container className="max-w-7xl flex  flex-col items-end justify-end">
        <Text className=" font-white max-w-[905px] text-2xl lg:text-3xl mt-6">
          - TAn on-chain register of staking pools is{" "}
          <span className="text-yellow font-semibold">maintained publicly</span>{" "}
          and
          <span className="text-yellow font-semibold">transparently</span> ,
          keeping reords of correct inflation distribution over all eligible
          accounts and{" "}
          <span className="text-yellow font-semibold">
            outsanting payments{" "}
          </span>
          per staking slot.
        </Text>
        <div className=" w-full grid lg:flex lg:items-center lg:justify-center lg:flex-wrap lg:grid-cols-2 gap-4 lg:gap-2 mt-9">
          <Button
            className="bg-red text-white border-none w-full lg:w-[320px] h-[56px] text-base"
            radius={100}
            variant="outline"
            rightIcon={<img src={ArrowUp} alt="Arrow Up" />}
          >
            READ TECHNICAL DESCRIPTION
          </Button>
          <Button
            variant="outline"
            radius={100}
            className="w-full lg:w-[240px] h-[56px] uppercase text-white border-white font-space-grotesk text-base"
          >
            BROWSE STAKING POOLS
          </Button>
        </div>
       
      </Container>
    </>
  );
};
