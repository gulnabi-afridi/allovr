import React from "react";
import { useState } from "react";
import { Modal, Group } from "@mantine/core";
import { Input } from "@mantine/core";
import ArrowUp from "../assets/Icons/arrow-up.svg";
import { Select } from "@mantine/core";
import { Button, Container, Text } from "@mantine/core";

type AvailablePoolModalProps = {
  opened: boolean;
  setOpened: any;
};

function AvailablePool({ opened, setOpened }: AvailablePoolModalProps) {
  return (
    <Container className="w-full max-w-[600px] flex flex-col justify-center items-center">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        styles={{
          modal: {
            backgroundColor: "black",
            border: "2px solid white",
            borderRadius: "16px",
            maxWidth: '600px',
            width: '100%',
          },
          close: {
            color: "#ED1E79",
          },
          inner: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <div>
          <Text className=" text-[25px] lg:text-[40px] font-semibold text-white">
            Stake AOVR
          </Text>
          <Text className="text-[14px] lg:text-[16px] text-gray-light font-normal leading-5 tracking-tighter mt-4">
            Staking some or all of your 25.200.000 AOVR will allow you to earn
            AOVR weekly. The minimum investment time is 1 week, meaning you will
            be able to withdraw your stake for 1 week. The minimum stake is 10
            AOVR.
          </Text>
          <Text className=" text-[16px] lg:text-[20px] text-gray-light font-normal mt-4 mb-2">
            Available Pools
          </Text>
          {/* select box */}
          <Select
            styles={{
              input: {
                backgroundColor: "#252525",
                border: "none",
                marginBottom: "20px",
                height: "50px",
                color: "white",
              },
              dropdown: {
                backgroundColor: "#252525",
              },
            }}
            data={[
              {
                value: "5Hz47x9T5EpVC6SPK3iwFnAtQvmLuKBf7tMa4z1CTVmS",
                label: "5Hz47x9T5EpVC6SPK3iwFnAtQvmLuKBf7tMa4z1CTVmS",
              },
              {
                value: "5Hz47x9T5EpVC6SPK3iwFnAtQvmLuKBf7tMa4z1CTVmS",
                label: "5Hz47x9T5EpVC6SPK3iwFnAtQvmLuKBf7tMa4z1CTVmS",
              },
              {
                value: "5Hz47x9T5EpVC6SPK3iwFnAtQvmLuKBf7tMa4z1CTVmS",
                label: "5Hz47x9T5EpVC6SPK3iwFnAtQvmLuKBf7tMa4z1CTVmS",
              },
            ]}
          />
          {/* another select */}
          <Text className="text-[20px] text-gray-light font-normal mt-4 mb-2">
            Available Pool Slots
          </Text>
          {/* select box */}
          <Select
            styles={{
              input: {
                backgroundColor: "#252525",
                border: "none",
                marginBottom: "20px",
                height: "50px",
                color: "white",
              },
              dropdown: {
                backgroundColor: "#252525",
              },
            }}
            data={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
            ]}
          />
          <Text className="text-[20px] text-gray-light font-normal mt-4 mb-2">
            Stake
          </Text>
          <Input
            styles={{
              wrapper: {
                width: "100%",
              },
              input: {
                backgroundColor: "#252525",
                border: "none",
                color: "white",
                height: "50px",
              },
            }}
            value="AVOR to Stake"
          ></Input>
          <Button
            className="btn-gradient w-full mt-4 font-medium"
            radius={100}
            variant="outline"
            rightIcon={<img src={ArrowUp} alt="Arrow Up" />}
          >
            WITHDRAWAL 500 AOVR
          </Button>
        </div>
      </Modal>
    </Container>
  );
}

export default AvailablePool;
