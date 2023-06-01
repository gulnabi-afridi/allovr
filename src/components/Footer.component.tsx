import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import instagram from "../assets/Icons/instagram.svg";
import discord from "../assets/Icons/discord.svg";
import twitter from "../assets/Icons/twitter.svg";
import { Text } from "@mantine/core";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center mt-[130px]">
      <Link to="/">
        <img
          className="max-w-[150px] lg:max-w-[250px]"
          src={Logo}
          alt="Allovr Logo"
        />
      </Link>
      <div className="flex mt-[30px] mb-[30px]">
        <img
          className="max-w-[100px] lg:max-w-[170px] mr-6"
          src={discord}
          alt="discord icon"
        />
        <img
          className="max-w-[100px] lg:max-w-[170px] mr-6"
          src={instagram}
          alt="instagram icon"
        />
        <img
          className="max-w-[100px] lg:max-w-[170px]"
          src={twitter}
          alt="twitter icon"
        />
      </div>
      <Text className="text-[20px] font-normal mb-[100px]">2022 . All Right Reserved</Text>
    </div>
  );
}

export default Footer;
