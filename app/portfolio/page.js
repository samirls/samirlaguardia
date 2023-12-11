'use client'

import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "./carousel/carousel";
import "animate.css";
import { useTranslation } from 'react-i18next';

function Portfolio() {

  const { t } = useTranslation();

  return (
    <Box width={{base:'100vw', lg:"87vw"}} bg="white">
      <Box width="100%">
        <Box
          fontSize="2rem"
          pl="10px"
          pt="20px"
          fontWeight="500"
          className="animate__animated animate__fadeIn"
        >
          {t('skills.title')}
        </Box>
        <Box display='flex' justifyContent='center' pt='50px' className="animate__animated animate__fadeIn">
          <Carousel />
        </Box>
      </Box>
    </Box>
  );
}

export default Portfolio;
