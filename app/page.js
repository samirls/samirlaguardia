"use client";

import { Box, Grid } from "@chakra-ui/layout";
import 'animate.css';

export default function Home() {
  return (
    <Box bg="gray.100">
      <Box
        width="87vw"
        bg="gray.100"
        display="flex"
        flexDir="column"
        justifyContent="flex-start"
        alignItems="center"
        height='62vh'
      >
        <Box width="99%" mb="10px" bg="white" borderBottomRadius="9px" >
          <Box px="10px" className="animate__animated animate__fadeIn">
            <Grid templateColumns="repeat(3, 1fr)" gap={6} h="35vh" alignItems='center'>
              <Box
                w="100%"
                h="30vh"
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
                <Box fontSize="1.6rem" fontWeight="600" textAlign="center">
                  Experiente na Área
                </Box>
                <Box px="20px" textAlign="justify">
                  Realiza entregas como freelancer e trabalhou para uma Startup
                </Box>
              </Box>
              <Box
                w="100%"
                h="30vh"
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
                <Box fontSize="1.6rem" fontWeight="600" textAlign="center">
                  Estudioso da Programação
                </Box>
                <Box px="20px" textAlign="justify">
                  Segue praticando sem deixar de se atualizar
                </Box>
              </Box>
              <Box
                w="100%"
                h="30vh"
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
                <Box fontSize="1.6rem" fontWeight="600" textAlign="center">
                  Apaixonado pelo que Faz
                </Box>
                <Box px="20px" textAlign="justify">
                  Aquele toque de faz toda a diferença
                </Box>
              </Box>
            </Grid>
          </Box>
          <Box py="30px" px="10px" className="animate__animated animate__fadeIn">
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
              <Box fontSize="1.6rem" fontWeight="600" pb="10px">
                Familiaridade com várias tecnologias
              </Box>
              <Box align="center">
                <img src="https://skillicons.dev/icons?i=html,css,javascript,typescript,react,next,nodejs,nestjs,prisma,tailwind,docker,git,github" />
              </Box>
              <Box align="center">
                <img src="https://skillicons.dev/icons?i=java,spring,hibernate,idea,mongodb,mysql,postgres" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
