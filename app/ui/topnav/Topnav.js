"use client";

import {
  Box,
  Button,
  Grid,
  GridItem,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import { IoLanguageOutline } from "react-icons/io5";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { i18n } from "../../../app/translation/i18n";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { useRef } from "react";

function Topnav() {
  const initRef = useRef();

  return (
    <Box
      width={{ base: "100vw", lg: "87vw" }}
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
      height={{ base: "200px", lg: "22vh" }}
      bg="white"
    >
      <Box width="100%">
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          pl="20px"
          backgroundImage="/img/Pc-code.jpg"
          bgPosition="left"
        >
          <Box
            display="block"
            fontSize="3.5rem"
            fontWeight="500"
            bgClip="text"
            bgGradient="linear(to-r, purple.300,blue.400)"
            width="200px"
          >
            Samir
          </Box>
          <Box
            display="block"
            fontSize="3.5rem"
            marginTop="-25px"
            fontWeight="500"
            bgClip="text"
            bgGradient="linear(to-r, blue.400,purple.300)"
            width="270px"
          >
            Laguardia
          </Box>
          <Box fontSize={"1.4rem"} fontWeight="600" color="gray.900" pl="8px">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Programmer",
                "Professional Coder",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </Box>
          {/*           <Box
            display={{ base: "flex", lg: "none" }}
            position="absolute"
            top={90}
            right={3}
            fontSize="2.5rem"
            color="black"
          >
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<IoLanguageOutline />}
              />
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
          </Box> */}
          <Box
            display={{ base: "flex", lg: "none" }}
            position="absolute"
            top={90}
            right={3}
            fontSize="2.5rem"
            color="black"
          >
            <Popover
              closeOnBlur={false}
              placement="auto-start"
              initialFocusRef={initRef}
            >
              {({ isOpen, onClose }) => (
                <>
                  <PopoverTrigger>
                    <div><IoLanguageOutline /></div>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Box
                          onClick={() => {
                            i18n.changeLanguage("en-US");
                            onClose();
                          }}
                          fontSize="1.3rem"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box>English</Box>
                          <Box ml={2}>
                            <LiaFlagUsaSolid />
                          </Box>
                        </Box>
                        <hr />
                        <Box
                          onClick={() => {
                            i18n.changeLanguage("pt-BR");
                            onClose();
                          }}
                          fontSize="1.3rem"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box>Português</Box>
                          <Box
                            ml={2}
                            color="white"
                            bg="black"
                            height="fit-content"
                            width="fit-content"
                          >
                            <GiBrazilFlag />
                          </Box>
                        </Box>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </>
              )}
            </Popover>
          </Box>
        </Box>
        <Box py="10px">
          <Grid templateColumns="repeat(5, 1fr)" gap={6} px="10px">
            <GridItem w="100%" h="1" bg="blue.200" borderRadius="9px" />
            <GridItem w="100%" h="1" bg="blue.200" borderRadius="9px" />
            <GridItem w="100%" h="1" bg="purple.400" borderRadius="9px" />
            <GridItem w="100%" h="1" bg="blue.200" borderRadius="9px" />
            <GridItem w="100%" h="1" bg="blue.200" borderRadius="9px" />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Topnav;
