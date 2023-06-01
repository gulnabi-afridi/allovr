import React from "react";
import { Container, Text, Title, Button } from "@mantine/core";
import ArrowUp from "../assets/Icons/arrow-up.svg";
import { Counter } from "./counter.component";
import { Modal, Group } from "@mantine/core";
import { useState } from "react";
import StackAvorModal from "./stackAvorModal.component";
import RequestAvorWithrawal from "./RequestAvorWithrawalModal.component";
import AvailablePool from "./AvailablePoolsModal.component";
import whiteLogo from "../assets/whiteLogo.svg";

export const StakeAovrSection = () => {
  const [stackModal, setStackModal] = useState(false);
  const [AvailablePoolModal, setAvailablePoolModal] = useState(false);

  return (
    <Container id="staking" className="max-w-7xl -mt-10">
      <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 lg:flex justify-between ">
        <section className="mt-16 lg:mt-16 flex flex-col gap-8">
          <div>
            <Text className="text-xl text-gray-light">
              Total Staked at this moment
            </Text>
            <Title className="text-[40px] lg:text-5xl font-semibold font-space-grotesk mt-4">
              56,669{" "}
              <span className="font-normal text-2xl text-gray-light font-work-sans">
                AVOR
              </span>
            </Title>
          </div>
          <div>
            <Text className="text-xl text-gray-light">
              Community earnings since last payout
            </Text>
            <Title className="text-[40px] lg:text-5xl font-semibold font-space-grotesk mt-4">
              32,669{" "}
              <span className="font-normal text-2xl text-gray-light font-work-sans">
                AVOR
              </span>
            </Title>
          </div>
          <div>
            <Text className="text-xl text-gray-light">Time to next payout</Text>
            <Counter />
          </div>

          <div className="grid lg:flex lg:items-center lg:flex-wrap lg:grid-cols-2 gap-4 lg:gap-2">
            <Button
              className="btn-gradient"
              radius={100}
              variant="outline"
              rightIcon={<img src={ArrowUp} alt="Arrow Up" />}
              onClick={() => {
                setAvailablePoolModal(true);
              }}
            >
              STAKE AOVR NOW
            </Button>
            <Button
              variant="outline"
              radius={100}
              className="btn-outline-white"
              onClick={() => setStackModal(true)}
            >
              WITHDRAW AOVR
            </Button>
          </div>
        </section>
        <section className="col-span-2 max-w-full lg:w-[631px] min-h-[450px] bg-[#101014] z-10 p-8 rounded-xl shadow-lg mt-6">
          <div className="flex  justify-between mb-4">
            <Text className="text-[14px] lg:text-base font-semibold">
              Wallet
            </Text>
            <Text className="text-[14px] lg:text-base text-blue font-normal flex ml-4 lg:ml-0 break-all">
              D83chhV83wr54dJtFYJWnoa7qbpTrHZTjCPbpQHbRmvD
            </Text>
          </div>
          <Text className="text-[20px] text-gray-light mb-2">Balance</Text>
          <div className="flex">
            {/* AVOR number */}
            <div className="flex items-end mr-10">
              <Text className="text-[20px] lg:text-2xl font-medium">
                350,000
              </Text>
              <Text className="text-[14px] lg:text-base text-gray-light">
                AOVR
              </Text>
            </div>
            {/* sql number */}
            <div className="flex items-end">
              <Text className="text-[20px] lg:text-2xl font-medium">
                350,000
              </Text>
              <Text className="text-[14px] lg:text-base text-gray-light">
                SQL
              </Text>
            </div>
          </div>

          <div className=" mt-5 w-full bg-red rounded-lg px-[16px] py-[24px]">
            <Text className="text-[20px] text-gray-light mb-2">Staked</Text>
            <div className="w-full flex flex-col lg:flex-row justify-between">
              {/* left part */}
              <div>
                <img
                  className="max-w-[50px] lg:max-w-[70px] mt-2"
                  src={whiteLogo}
                  alt="Allovr Logo"
                />
                {/* AVOR quantity */}
                <div className="flex items-end mt-[16px]">
                  <Text className="text-[20px] lg:text-2xl font-medium">
                    350,000
                  </Text>
                  <Text className="text-[14px] lg:text-base text-gray-light">
                    AOVR
                  </Text>
                </div>
              </div>
              {/* right div */}
              <div className="flex ">
                {/* pool index */}
                <div className="mr-8">
                  <Text className="text-[14px] lg:text-base font-normal">
                    Pool Index
                  </Text>
                  <Text className="text-[20px] lg:text-2xl mt-2 lg:mt-6 font-medium">
                    23
                  </Text>
                </div>
                {/* slot index */}
                <div>
                  <Text className="text-[14px] lg:text-base font-normal">
                    Slot
                  </Text>
                  <Text className="text-[20px] lg:text-2xl  mt-2 lg:mt-6 font-medium">
                    12
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text className="font-semibold text-[20px] lg:text-2xl mt-4">
            Active withdrawal request
          </Text>
          <Text className="font-normal text-[14px] lg:text-base mt-4 text-gray-light">
            AOVR available for transfer on Thu 10 Oct 2022, 10.00 GMT
          </Text>
          <Button
            className="bg-red text-white border-none w-full lg:w-[124px] font-medium font-[Space Grotesk] h-[48px] text-[14px] lg:text-base mt-4"
            radius={100}
            variant="outline"
          >
            COMPLETED
          </Button>
        </section>
      </section>

      {/*  */}
      {stackModal && (
        <RequestAvorWithrawal opened={stackModal} setOpened={setStackModal} />
      )}
      {AvailablePoolModal && (
        <AvailablePool
          opened={AvailablePoolModal}
          setOpened={setAvailablePoolModal}
        />
      )}
    </Container>
  );
};
