import React from "react";
import { Container, Title, Button, Text } from "@mantine/core";
import ArrowUp from "../assets/Icons/arrow-up.svg";
import CartComponent from "./cart.component";

export const StakingPoolsSection = () => {
  return (
    <Container className="max-w-7xl flex justify-center items-center flex-col mt-[95px] pt-[60px]  mobile-radial-gradient lg:desktop-radial-gradient overflow-hidden">
      {/* top portion */}
      <section className="w-full grid lg:grid-cols-2 ">
        {/* text div */}
        <div className="flex flex-col ">
          <Text className="text-[40px] lg:text-6xl font-semibold text-white">
            Staking pools
          </Text>
          <Text className="text-base lg:text-xl font-normal text-gray-light mt-[16px] lg:mt-[24px]">
            Browse <span className="font-bold text-white"> ALLOVR’s </span>100%
            transparent staking pools. Select a pool to stake your{" "}
            <span className="font-bold text-white"> ALLOVR</span> tokens or get
            assigned one randomly by hitting
            <span className="font-bold text-yellow"> Stake AOVR now </span>.
            note that all staking pools work the same and
          </Text>
          <Text className="text-base lg:text-2xl text-white mt-[16px] lg:mt-[24px] font-medium">
            - earn the same there is no good or bad choice here
          </Text>
        </div>
        {/* buttons div */}
        <div className="w-full grid lg:flex lg:items-end lg:flex-wrap lg:grid-cols-2 gap-4 lg:gap-2 mt-9 lg:ml-[100px]">
          <Button
            className="bg-red text-white border-none w-full lg:w-[228px] h-[56px] text-base"
            radius={100}
            variant="outline"
            rightIcon={<img src={ArrowUp} alt="Arrow Up" />}
          >
            TRIGGER INFLATION RUN
          </Button>
          <Button
            variant="outline"
            radius={100}
            className="w-full lg:w-[164px] h-[56px] uppercase text-white border-white font-space-grotesk text-base"
          >
            REGISTER POOL
          </Button>
        </div>
      </section>
      {/* bootom portion */}
      <section className="sm:grid grid-cols-1 flex flex-col justify-center items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-[40px]">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return (
            <CartComponent
              poolNum={data[item].poolNum}
              stakedNum={data[item].stakedNum}
              owedNum={data[item].owedNum}
              availableSlot={data[item].availableSlot}
            />
          );
        })}
      </section>
      <Button
            variant="outline"
            radius={100}
            className="w-full lg:w-[164px] h-[56px] uppercase text-white border-white font-space-grotesk text-base mt-[70px]"
          >
            Load More...
          </Button>
    </Container>
  );
};

const data = [
  {
    poolNum: "pool 0",
    stakedNum: "672",
    owedNum: "183",
    availableSlot: "7",
  },
  {
    poolNum: "pool 1",
    stakedNum: "140",
    owedNum: "0",
    availableSlot: "2",
  },
  {
    poolNum: "pool 2",
    stakedNum: "1917",
    owedNum: "0",
    availableSlot: "2",
  },
  {
    poolNum: "pool 3",
    stakedNum: "809",
    owedNum: "137",
    availableSlot: "3",
  },
  {
    poolNum: "pool 4",
    stakedNum: "456",
    owedNum: "0",
    availableSlot: "2",
  },
  {
    poolNum: "pool 5",
    stakedNum: "548",
    owedNum: "99",
    availableSlot: "2",
  },
  {
    poolNum: "pool 6",
    stakedNum: "1922",
    owedNum: "4",
    availableSlot: "4",
  },
  {
    poolNum: "pool 7",
    stakedNum: "1077",
    owedNum: "4",
    availableSlot: "2",
  },
];
