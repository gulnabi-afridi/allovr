import React from "react";
import { useState } from "react";
import { Modal, Group } from "@mantine/core";
import { Input } from "@mantine/core";
import ArrowUp from "../assets/Icons/arrow-up.svg";
import { Button, Container, Text } from "@mantine/core";

type stackModalState = {
  opened: boolean;
  setOpened: any;
};

function StackAvorModal({ opened, setOpened }: stackModalState) {
  return (
    <Container className="flex flex-col justify-center items-center">
      <Modal
        size={590}
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
          <Text className="text-[25px] lg:text-[40px] font-semibold text-white">Stake</Text>
          <Text className="text-[14px] lg:text-[16px] text-gray-light font-normal leading-5 tracking-tighter mt-4">
            Staking some or all of your 25.200.000 AOVR will allow you to earn
            AOVR weekly. The minimum investment time is 1 week, meaning you will
            be able to withdraw your stake for 1 week. The minimum stake is 10
            AOVR.
          </Text>
          <Text className="text-[16px] lg:text-[20px] text-gray-light font-normal mt-4 mb-2">
            Withdrawal Amount
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

export default StackAvorModal;
