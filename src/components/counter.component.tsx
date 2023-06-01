import React from "react";
import { Container, Text, Title, Button } from "@mantine/core";

export const Counter = () => {
  return (
    <div className="flex gap-4 mt-5 justify-center lg:justify-start">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[60px] h-[60px] rounded-full bg-yellow flex justify-center items-center">
          <Text className="text-2xl font-semibold text-black" >02</Text>
        </div>
        <Text className="font-[14px] text-gray-light">Days</Text>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[60px] h-[60px] rounded-full bg-yellow flex justify-center items-center">
          <Text className="text-2xl font-semibold text-black">14</Text>
        </div>
        <Text className="font-[14px] text-gray-light">Hours</Text>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[60px] h-[60px] rounded-full bg-yellow flex justify-center items-center">
          <Text className="text-2xl font-semibold text-black">22</Text>
        </div>
        <Text className="font-[14px] text-gray-light">Minutes</Text>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[60px] h-[60px] rounded-full bg-yellow flex justify-center items-center">
          <Text className="text-2xl font-semibold text-black">32</Text>
        </div>
        <Text className="font-[14px] text-gray-light">Seconds</Text>
      </div>

    </div>
  );
};
