import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { FiMonitor } from "react-icons/fi";
import { FcPlus } from "react-icons/fc";

function card({title, icon, option1, option2, option3, option4, option5, option6}) {
  return (
    <Grid
      templateRows="2fr 1fr 1fr 1fr 1fr 1fr 1fr"
      w="100%"
      h={{base:'350px', lg:"35vh"}}
      bg="linear-gradient(to top, #ecf2f8 0%, white 100%)"
      borderRadius="18px"
      boxShadow='lg'
      _hover={{
        boxShadow: "2xl",
      }}
      transition="500ms"
    >
      <Box
        fontSize="1.4rem"
        fontWeight="500"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="gray.50"
        borderRadius='9px'
        boxShadow='sm'
        gap={2}
      >
        {icon}{title}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        fontSize="1.2rem"
        gap={2}
        px="50px"
      >
        <FcPlus /> {option1}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        fontSize="1.2rem"
        gap={2}
        px="50px"
      >
        <FcPlus /> {option2}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        fontSize="1.2rem"
        gap={2}
        px="50px"
      >
        <FcPlus /> {option3}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        fontSize="1.2rem"
        gap={2}
        px="50px"
      >
        <FcPlus /> {option4}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        fontSize="1.2rem"
        gap={2}
        px="50px"
      >
        <FcPlus /> {option5}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        fontSize="1.2rem"
        gap={2}
        px="50px"
      >
        <FcPlus /> {option6}
      </Box>
    </Grid>
  );
}

export default card;
