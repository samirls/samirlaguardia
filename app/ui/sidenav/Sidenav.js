"use client";

import { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { IoHomeOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { FaPersonChalkboard } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { RxChevronRight } from "react-icons/rx";
import NavItem from "./NavItem";
import "animate.css";
import { useDisclosure } from "@chakra-ui/react";
import DrawerComponent from "./DrawerComponent";
import { CiMenuKebab } from "react-icons/ci";
import { i18n } from "../../../app/translation/i18n";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@chakra-ui/react";
import { IoLanguageOutline } from "react-icons/io5";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";

export default function SideNav() {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  const menuItems = [
    { icon: <IoHomeOutline />, label: t("sideNav.home"), path: "/" },
    { icon: <GiSkills />, label: t("sideNav.skills"), path: "/skills" },
    {
      icon: <FaPersonChalkboard />,
      label: t("sideNav.portfolio"),
      path: "/portfolio",
    },
    { icon: <FiPhone />, label: t("sideNav.contact"), path: "/contact" },
  ];

  return (
    <>
      <Box
        display={{ base: "none", lg: "flex" }}
        width="13vw"
        flexDir="column"
        height="100vh"
        justifyContent="center"
        px="10px"
        bg="white"
      >
        <Tooltip label="Choose your Language" placement="right">
          <Box
            display={{ base: "none", lg: "flex" }}
            justifyContent="center"
            alignItems="center"
            fontSize="2.5rem"
            color="black"
            position="absolute"
            bottom={10}
            left={10}
            bg="purple.200"
            borderRadius="50%"
          >
            <Menu>
              <MenuButton>
                <IoLanguageOutline />
              </MenuButton>
              <MenuList fontSize="1.2rem">
                <MenuItem onClick={() => i18n.changeLanguage("en-US")}>
                  English
                  <Box ml={2}>
                    <LiaFlagUsaSolid />
                  </Box>
                </MenuItem>
                <MenuItem onClick={() => i18n.changeLanguage("pt-BR")}>
                  Português
                  <Box color="white" bg="black" height="fit-content" ml={2}>
                    <GiBrazilFlag />
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Tooltip>
        <Box
          display="flex"
          flexDir="column"
          height="300px"
          justifyContent="space-between"
          px="15px"
          py="15px"
          fontSize="1.1rem"
          bg="white"
          borderRadius="9px"
        >
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              path={item.path}
              isSelected={pathname === item.path}
            />
          ))}
        </Box>
      </Box>
      <Box
        position="absolute"
        fontSize="3rem"
        top={5}
        right={3}
        color="black"
        display={{ base: "block", lg: "none" }}
        onClick={() => onOpen()}
      >
        <CiMenuKebab />
      </Box>
      <Box
        position="fixed"
        fontSize="3rem"
        top={"50%"}
        left={-2}
        color="black.200"
        display={{ base: "block", lg: "none" }}
        onClick={() => onOpen()}
        zIndex={9}
      >
        <RxChevronRight />
      </Box>
      <DrawerComponent
        isOpen={isOpen}
        onClose={onClose}
        menuItems={menuItems}
      />
    </>
  );
}
