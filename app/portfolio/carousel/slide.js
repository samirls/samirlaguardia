import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { LuMonitorUp, LuMonitorOff } from "react-icons/lu";
import { Tooltip } from "@chakra-ui/react";

function slide({ src, hrefLive, hrefGithub, skills }) {
  return (
    <Box className="animate__animated animate__fadeIn" position="relative">
      <Image
        src={src}
        width="900"
        height="320"
        style={{ width: "auto", height: "320px" }}
        alt="image"
      />
      <Box
        fontSize="2.5rem"
        position="absolute"
        top="100px"
        right="-50px"
        color="black"
      >
        {hrefLive === "notDeployed" ? (
          <Tooltip label="Sem Deploy">
            <span>
              <LuMonitorOff />
            </span>
          </Tooltip>
        ) : (
          <Tooltip label="Ver projeto em nova aba">
            <span>
              <Link href={hrefLive} target="_blank" rel="noreferrer">
                <LuMonitorUp />
              </Link>
            </span>
          </Tooltip>
        )}
      </Box>
      <Box
        fontSize="2.5rem"
        position="absolute"
        top="180px"
        right="-50px"
        color="purple.500"
      >
        <Tooltip label="Ver código em nova aba">
          <span>
            <Link href={hrefGithub} target="_blank" rel="noreferrer">
              <AiFillGithub />
            </Link>
          </span>
        </Tooltip>
      </Box>
      <Box fontSize="1.5rem" display="flex" alignItems="center" height="50px" gap={2}>
        <Box>Tecnologias:</Box>
        {skills.map((skill, index) => (
          <Box key={index} fontSize="2.5rem" color={skill.color}>
            {skill.icon}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default slide;
