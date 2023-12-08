import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Card from "./Card";

function Contact() {
  return (
    <Box
      width="87vw"
      bg="gray.100"
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
      height="62vh"
    >
      <Box width="99%" mb="10px" bg="white" borderBottomRadius="9px">
        <Box
          fontSize="2rem"
          pl="10px"
          fontWeight="500"
          className="animate__animated animate__fadeIn"
        >
          Contato
        </Box>
        <Box height="55vh">
          <Box pl="20px">Diga um olá</Box>
          <Grid
            templateColumns="1fr 1fr"
            gap={10}
            px="60px"
            py="20px"
            className="animate__animated animate__fadeIn"
            height="50vh"
          >
            <Box
              width="100%"
              display="flex"
              flexDir="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Card
                icon={<AiOutlineMail />}
                title={"Email"}
                subTitle={"samirlaguardiaii@gmail.com"}
                buttonName={"Enviar E-mail"}
                href={"mailto:samirlaguardiaii@gmail.com"}
              />
              <Card
                icon={<FaWhatsapp />}
                title={"Whatsapp"}
                subTitle={"+5527997761863"}
                buttonName={"Enviar Mensagem"}
                href={"https://api.whatsapp.com/send?phone=5527997761863"}
              />
            </Box>
            <Box
              width="100%"
              display="flex"
              flexDir="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Card
                icon={<FaLinkedin />}
                title={"LinkedIn"}
                subTitle={"samir-laguardia"}
                buttonName={"Ver Rede"}
                href={"https:www.linkedin.com/in/samir-laguardia"}
              />
              <Card
                icon={<FaGithub />}
                title={"Github"}
                subTitle={"samirls"}
                buttonName={"Ver Projetos"}
                href={"https://github.com/samirls"}
              />
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
