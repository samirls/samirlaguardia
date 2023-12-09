"use client";

import { Box } from "@chakra-ui/layout";
import { IoHomeOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { FaPersonChalkboard } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { RxChevronRight } from "react-icons/rx";
import NavItem from "./NavItem";
import "animate.css";
import { useDisclosure } from "@chakra-ui/react";
import DrawerComponent from "./DrawerComponent";

const menuItems = [
  { icon: <IoHomeOutline />, label: "Início", path: "/" },
  { icon: <GiSkills />, label: "Habilidades", path: "/skills" },
  { icon: <FaPersonChalkboard />, label: "Portfólio", path: "/portfolio" },
  { icon: <FiPhone />, label: "Contato", path: "/contact" },
];

export default function SideNav() {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        right={5}
        color="blue.200"
        display={{ base: "block", lg: "none" }}
        onClick={() => onOpen()}
      >
        <FiMenu />
      </Box>
      <Box
        position="fixed"
        fontSize="3rem"
        top={"50%"}
        left={-2}
        color="black.200"
        display={{ base: "block", lg: "none" }}
        onClick={() => onOpen()}
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
