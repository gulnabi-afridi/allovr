import React, { useState } from "react";
import { ActionIcon, Drawer, Button, Container, CloseButton } from "@mantine/core";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import PhantomLogo from "../assets/phantom.svg";
import { AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  {
    id: "about",
    text: "About"
  },
  {
    id: "how-it-works",
    text: "How it Works"
  },
  {
    id: "staking",
    text: "Staking"
  }
];

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="relative pb-4 pt-4 lg:pt-6 xl:pt-10 z-50">
        <Container className={`max-w-7xl flex items-center justify-between `}>
          {/* Left Logo */}
          <Link to="/">
            <img className="max-w-[100px] lg:max-w-[170px]" src={Logo} alt="Allovr Logo" />
          </Link>
          <nav className="flex items-center gap-2 md:gap-4 lg:gap-10">
            {navLinks.map(({ id, text }) => (
              <Link
                key={id}
                className="hidden lg:block text-white font-medium text-xl no-underline"
                to={`#${id}`}
              >
                {text}
              </Link>
            ))}
            <Button
              leftIcon={
                <>
                  <img
                    className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]"
                    src={PhantomLogo}
                    alt="Phantom"
                  />
                </>
              }
              className="text-white font-space-grotesk uppercase border-white text-[8px] sm:text-xs lg:text-base h-[26px] md:h-[36px] lg:h-[42px] px-2 "
              variant="outline"
              radius={"xl"}
            >
              Connect Phantom Wallet
            </Button>
            <ActionIcon
              onClick={() => {
                setIsMobileNavOpen(true);
              }}
              className="block lg:hidden text-red"
              variant="transparent"
            >
              <AiOutlineMenu size={"30"} />
            </ActionIcon>
          </nav>
        </Container>
      </header>

      {/* Mobile drawer */}
      <Drawer
        opened={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        title=""
        padding="xl"
        size="xl"
        position="top"
        closeButtonLabel="Close Mobile Nav"
        withCloseButton={false}
        className={"bg-dark"}
        overlayOpacity={0.1}
      >
        {/* Drawer content */}
        <header aria-label="mobile drawer header" className="flex items-center justify-end">
          <CloseButton
            onClick={closeMobileNav}
            title="Close Mobile Nav"
            size="xl"
            className="text-red"
            iconSize={30}
            variant="transparent"
          />
        </header>
        <div className="flex justify-center items-center mt-4">
          <img className="max-w-[170px]" src={Logo} alt="" />
        </div>
        <nav className="flex mt-5 flex-col items-center gap-10">
          {navLinks.map(({ id, text }) => (
            <Link key={id} className="text-white font-medium text-xl no-underline" to={`#${id}`}>
              {text}
            </Link>
          ))}
          <Button
            leftIcon={
              <>
                <img className="w-[24px] h-[24px]" src={PhantomLogo} alt="Phantom" />
              </>
            }
            className="btn-outline-white h-[42px] px-4 "
            variant="outline"
            radius={"xl"}
          >
            Connect Phantom Wallet
          </Button>
        </nav>
      </Drawer>
    </>
  );
};
