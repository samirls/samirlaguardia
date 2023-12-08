"use client";

import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function Star({ message }) {
  const [star, setStar] = useState(false);

  const starHovered = () => {
    setStar(true);
  };

  const starNotHovered = () => {
    setStar(false);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      onMouseEnter={starHovered}
      onMouseLeave={starNotHovered}
      cursor='default'
    >
      <Box>
        {star ? (
          <Box color="yellow.400">
            <FaStar />
          </Box>
        ) : (
          <CiStar />
        )}
      </Box>
      {message}
    </Box>
  );
}

export default Star;
