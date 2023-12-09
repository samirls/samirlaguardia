"use client";

import { Box, Grid, Slide } from "@chakra-ui/react";
import React from "react";
import Card from "./card";
import Star from "./Star";
import { FiMonitor } from "react-icons/fi";
import { TbDatabase } from "react-icons/tb";
import "animate.css";

function Skills() {
  return (
    <Box
      width={{base:'100vw', lg:"87vw"}}
      bg="white"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="100%" height={{base: '', lg:'78vh'}}>
        <Box fontSize="2rem" pl="10px" pt='20px' fontWeight="500" className="animate__animated animate__fadeIn">
          Habilidades
        </Box>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={10} px="60px" py="20px" className="animate__animated animate__fadeIn">
          <Card
            title={"Frontend"}
            icon={<FiMonitor/>}
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
            option2="Express"
            option3="Nest.js"
            option4="Java"
            option5="Spring Boot"
            option6="DB SQL/NoSQL"
          />
        </Grid>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          width={{base: '100%', lg: "100%"}}
          px={{base: '30px', lg:"70px"}}
          fontSize={{base: '1rem', lg:"1.2rem"}}
          className="animate__animated animate__fadeIn"
          gap={{base: 5, lg: 2}}
          pb={{base:'50px', lg:'5px'}}
          pt={{base: '30px', lg: '5px'}}

        >
          <Star
            message={
              "Cursando pós-graduação em desenvolvimento Full Stack pelo Centro Universitário Descomplica."
            }
          />
          <Star
            message={
              "Cursando Backend com Node.js e Typescript com a AdaTech."
            }
          />
          <Star
            message={
              "Possuo conhecimento em Server Actions e desenvolvo aplicações Full Stack com Next.js."
            }
          />
          <Star message={"Terminei vários cursos renomados da Udemy e completei o Bootcamp The Odin Project em Full Stack Javascript com Ubuntu/Linux."} />
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;
