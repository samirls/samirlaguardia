"use client";

import { Box, Grid } from "@chakra-ui/layout";
import "animate.css";
import { useTranslation } from "react-i18next";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Box
      width={{ base: "100vw", lg: "87vw" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={{ base: "", lg: "78vh" }}
      bg="white"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <Box width="100%">
          <Box px="10px">
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={{ base: 3, lg: 6 }}
              h={{ base: "", lg: "35vh" }}
              alignItems="center"
            >
              <Box
                w="100%"
                h={{ base: "150px", lg: "30vh" }}
                bg="linear-gradient(to top, #ecf2f8 0%, white 100%)"
                borderRadius="30px"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                boxShadow="lg"
                _hover={{
                  boxShadow: "2xl",
                }}
                transition="500ms"
              >
                <Box
                  fontSize="1.6rem"
                  fontWeight="600"
                  textAlign="center"
                  className={styles.effect}
                >
                  {t("home.box1Title")}
                </Box>
                <Box px="20px" textAlign="justify">
                  {t("home.box1Subtitle")}
                </Box>
              </Box>
              <Box
                w="100%"
                h={{ base: "150px", lg: "30vh" }}
                bg="linear-gradient(to top, #ecf2f8 0%, white 100%)"
                borderRadius="30px"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                boxShadow="lg"
                _hover={{
                  boxShadow: "2xl",
                }}
                transition="500ms"
              >
                <Box
                  fontSize="1.6rem"
                  fontWeight="600"
                  textAlign="center"
                  className={styles.effect}
                >
                  {t("home.box2Title")}
                </Box>
                <Box px="20px" textAlign="justify">
                  {t("home.box2Subtitle")}
                </Box>
              </Box>
              <Box
                w="100%"
                h={{ base: "150px", lg: "30vh" }}
                bg="linear-gradient(to top, #ecf2f8 0%, white 100%)"
                borderRadius="30px"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                boxShadow="lg"
                _hover={{
                  boxShadow: "2xl",
                }}
                transition="500ms"
              >
                <Box
                  fontSize="1.6rem"
                  fontWeight="600"
                  textAlign="center"
                  className={styles.effect}
                >
                  {t("home.box3Title")}
                </Box>
                <Box px="20px" textAlign="justify">
                  {t("home.box3Subtitle")}
                </Box>
              </Box>
            </Grid>
          </Box>
          <Box
            py="30px"
            px="10px"
            className="animate__animated animate__fadeIn"
          >
            <Box
              w="100%"
              h="20vh"
              bg="linear-gradient(to top, #ecf2f8 0%, white 100%)"
              boxShadow="lg"
              _hover={{
                boxShadow: "2xl",
              }}
              transition="500ms"
              borderRadius="30px"
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Box
                fontSize="1.6rem"
                fontWeight="600"
                textAlign="center"
                mb="10px"
                className={styles.effect}
              >
                {t("home.box4Title")}
              </Box>
              <Box align="center">
                <img src="https://skillicons.dev/icons?i=html,css,javascript,typescript,react,next,nodejs,nestjs,prisma,tailwind,docker,git,github" />
              </Box>
              <Box align="center">
                <img src="https://skillicons.dev/icons?i=java,spring,hibernate,idea,mongodb,mysql,postgres,cs,dotnet" />
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
