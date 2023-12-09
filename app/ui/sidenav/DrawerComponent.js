"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
} from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

function DrawerComponent({ isOpen, onClose, menuItems }) {
  const pathname = usePathname();

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      bg="whiteAlpha.200"
    >
      <DrawerContent bg="whiteAlpha.900" w='200px' maxWidth='200px'>
        <DrawerCloseButton />
        <DrawerBody
          display="flex"
          flexDir="column"
          justifyContent="center"
          height="300px"
          p={3}
        >
          {menuItems.map((item, index) => (
            <Box bg="white" key={index} onClick={() => onClose()}>
              <NavItem
                icon={item.icon}
                label={item.label}
                path={item.path}
                isSelected={pathname === item.path}
              />
            </Box>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerComponent;
