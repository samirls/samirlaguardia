"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "./carousel/carousel";
import "animate.css";
import { useTranslation } from "react-i18next";
import {motion} from 'framer-motion'

function Portfolio() {
  const { t } = useTranslation();

  return (
    <Box width={{ base: "100vw", lg: "87vw" }} bg="white">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <Box width="100%">
          <Box
            fontSize="2rem"
            pl="10px"
            pt="50px"
            fontWeight="500"
            className="animate__animated animate__fadeIn"
          >
            {t("portfolio.title")}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            pt="50px"
            className="animate__animated animate__fadeIn"
          >
            <Carousel />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Portfolio;
