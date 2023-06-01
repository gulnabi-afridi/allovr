import React from "react";
import { Container, Button, Text } from "@mantine/core";

type CartProps = {
  twoButtons?: boolean;
  poolNum: string;
  stakedNum: string;
  owedNum: string;
  availableSlot: string;
};

function CartComponent({
  twoButtons,
  poolNum,
  stakedNum,
  owedNum,
  availableSlot,
}: CartProps) {
  return (
    <div className="w-[312px] lg:w-[275px] px-[16px] py-[24px] flex flex-col bg-light-black rounded-lg">
      <Text className="font-bold text-[24px]">{poolNum}</Text>
      <div className="flex justify-between">
        {/* left part */}
        <div>
          <Text className="text-base text-gray-light font-normal mb-[12px]">
            Total Staked
          </Text>
          <Text className="text-base text-gray-light font-normal">
            <span className="text-[24px] text-white font-medium">
              {stakedNum}
            </span>{" "}
            AVOR
          </Text>
        </div>
        {/* right part */}
        <div>
          <Text className="text-base text-gray-light font-normal mb-[12px]">
            Total Owed
          </Text>
          <Text className="text-base text-gray-light font-normal">
            <span className="text-[24px] text-white font-medium">
              {owedNum}
            </span>{" "}
            AVOR
          </Text>
        </div>
      </div>
      <Text className="text-base text-gray-light font-normal mt-[12px] mb-[12px]">
        Available Slots :{" "}
        <span className="text-[24px] text-yellow font-medium">
          {availableSlot}
        </span>{" "}
        Slots
      </Text>
      {/* bottom border */}
      <div className=""></div>
      <Text className="w-full break-words leading-6 text-[16px] text-[#0093FE] font-normal mb-[12px]">
        DzWPTj1Ym5w5uGoGvdjtRK6GyoG4VpjL8VJhdUcSRfqg
      </Text>
      {twoButtons ? (
        <>
          <div className="flex">
            <Button
              variant="outline"
              radius={100}
              className="w-full lg:w-[164px] h-[56px] uppercase text-white border-white font-space-grotesk text-base"
            >
              REBALANCE
            </Button>
            <Button
              className="bg-red text-white border-none w-[89px] h-[41px] text-base"
              radius={100}
              variant="outline"
            >
              STAKE
            </Button>
          </div>
        </>
      ) : (
        <>
          <Button
            className="bg-red text-white border-none w-[89px] h-[41px] text-base"
            radius={100}
            variant="outline"
          >
            STAKE
          </Button>
        </>
      )}
    </div>
  );
}

export default CartComponent;
