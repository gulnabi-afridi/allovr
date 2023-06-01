import React from "react";
import { Container, Title, Text } from "@mantine/core";
import { Section } from "@mantine/core/lib/AppShell/HorizontalSection/Section/Section";

type TextWithImageProps = {
  imageOnRight?: boolean;
  imgSrc: string;
  heading: string;
  subHeading: React.ReactNode;
};

type TextSideProps = {
  heading: string;
  subHeading: React.ReactNode;
};

const TextSide = ({ heading, subHeading }: TextSideProps) => {
  return (
    <div className="flex flex-col justify-center items-start mt-8 lg:mt-0">
      <Title className="bold text-4xl lg:text-6xl">{heading}</Title>
      {subHeading}
    </div>
  );
};

export const TextWithImage = ({
  imageOnRight,
  imgSrc,
  heading,
  subHeading,
}: TextWithImageProps) => {
  return (
    <Container className="max-w-7xl flex flex-col justify-center items-center mt-[80px] lg:mt-[120px] overflow-hidden">
        {imageOnRight ? (
          <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 w-full">
            {/* => Left */}
            <div className="flex justify-center items-center">
            <TextSide heading={heading} subHeading={subHeading} />
            </div>
            {/* =>Right */}

            <img
              src={imgSrc}
              alt="Staking"
              className="lg: max-w-full w-[100%] flex, justify-center lg:ml-[30px] ml-0 mt-10 lg:mt-0"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full"> 
            {/* => Left */}
            <img src={imgSrc} alt="Staking" className="lg:max-w-full w-[100%]" />
            {/* =>Right */}
            <TextSide heading={heading} subHeading={subHeading} />
          </div>
        )}
    </Container>
  );
};
