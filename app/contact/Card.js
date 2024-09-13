import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Card({ icon, title, subTitle, buttonName, href }) {
  return (
    <Box
      w={{ base: "80%", lg: "50%" }}
      h={{ base: "150px", lg: "180px" }}
      bg="linear-gradient(to top, #c3cfe2 0%, #f5f7fa 100%);"
      borderRadius="30px"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      mb={{ base: "0", lg: "15px" }}
      boxShadow="md"
      _hover={{
        boxShadow: "lg",
      }}
      transition="500ms"
    >
      <Box fontSize="1.6rem">{icon}</Box>
      <Box pt="10px" fontWeight="800">
        {title}
      </Box>
      <Box mt="-5px" fontWeight="400">
        {subTitle}
      </Box>
      <Box pt="10px">
        <Link href={href} target="_blank">
          <Button size="sm" colorScheme="purple" color="white">
            {buttonName}
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Card;
