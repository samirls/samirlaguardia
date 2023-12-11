import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Card from "./Card";

function Contact() {
  return (
    <Box
      width={{base:'100vw', lg:"87vw"}}
      bg="white"
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
      height="62vh"
    >
      <Box width="100%">
        <Box
          fontSize="2rem"
          pl="10px"
          pt='20px'
          fontWeight="500"
          className="animate__animated animate__fadeIn"
        >
          Contato
        </Box>
        <Box height={{base: '', lg:"55vh"}}>
          <Box pl="20px" className="animate__animated animate__fadeIn">Diga um olá!</Box>
          <Grid
            templateColumns={{base: '1fr', lg:"1fr 1fr"}}
            gap={{base: 0, lg:10}}
            px={{base:'10px', lg:"60px"}}
            py={{base:'10px', lg:"20px"}}
            className="animate__animated animate__fadeIn"
            height={{base: '800px', lg:"50vh"}}
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
