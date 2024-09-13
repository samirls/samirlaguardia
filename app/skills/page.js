"use client";

import { Box, Grid, Slide } from "@chakra-ui/react";
import React from "react";
import Card from "./card";
import Star from "./Star";
import { FiMonitor } from "react-icons/fi";
import { TbDatabase } from "react-icons/tb";
import "animate.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Skills() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <Box
        width={{ base: "100vw", lg: "87vw" }}
        bg="white"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        pb="40px"
      >
        <Box width="100%">
          <Box fontSize="2rem" pl="10px" pt="50px" fontWeight="500">
            {t("skills.title")}
          </Box>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={10}
            px="60px"
            py="20px"
            className="animate__animated animate__fadeIn"
          >
            <Card
              title={"Frontend"}
              icon={<FiMonitor />}
              option1="HTML"
              option2="CSS"
              option3="Javascript"
              option4="Typescript"
              option5={"React"}
              option6={"Next.js"}
            />
            <Card
              title={"Backend"}
              icon={<TbDatabase />}
              option1="Node"
              option2="Nest.js"
              option3="C#"
              option4=".NET"
              option5="Java"
              option6="DB SQL/NoSQL"
            />
          </Grid>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            width={{ base: "100%", lg: "100%" }}
            mt="30px"
            px={{ base: "30px", lg: "70px" }}
            fontSize={{ base: "1rem", lg: "1.2rem" }}
            className="animate__animated animate__fadeIn"
            gap={{ base: 5, lg: 2 }}
            pb={{ base: "50px", lg: "5px" }}
            pt={{ base: "30px", lg: "5px" }}
            bg="linear-gradient(to top, #ecf2f8 0%, white 100%)"
            borderRadius="18px"
            boxShadow="lg"
            _hover={{
              boxShadow: "2xl",
            }}
            transition="500ms"
          >
            <Star message={t("skills.star1")} />
            <Star message={t("skills.star2")} />
            <Star message={t("skills.star3")} />
            <Star message={t("skills.star4")} />
            <Star message={t("skills.star5")} />
            <Star message={t("skills.star6")} />
            <Star message={t("skills.star7")} />
            <Star message={t("skills.star8")} />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Skills;
