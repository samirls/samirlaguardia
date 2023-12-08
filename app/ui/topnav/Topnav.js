"use client";

import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

function Topnav() {
  return (
    <Box
      width="87vw"
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
      height="22vh"
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
