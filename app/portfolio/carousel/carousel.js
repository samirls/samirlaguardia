'use client'

import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React, {useState} from "react";
import { FaChevronLeft, FaChevronRight, FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript, BiLogoSpringBoot, BiLogoPostgresql  } from "react-icons/bi";
import { SiMongodb, SiExpress, SiMongoose, SiJavascript  } from "react-icons/si";
import {BsCircle} from 'react-icons/bs'
import 'animate.css';
import Link from "next/link";
import Slide from "./Slide"

function Carousel() {

  const [currentPage, setCurrentPage] = useState(1);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < 8) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Box display='flex' justifyContent='center'  >
      <Box className="animate__animated animate__fadeIn">

        {
          currentPage === 1 &&
          <Slide 
            src={"/img/drake-equation.png"}
            hrefLive={"https://drake-equation-next-14.vercel.app/"}
            hrefGithub={"https://github.com/samirls/drake-equation-next-14"}
            skills={[
              { icon: <TbBrandNextjs/>, color: "gray.800"},
              { icon: <BiLogoTypescript />, color: "blue.500" },
              { icon: <BiLogoPostgresql />, color: "blue.700" },
            ]}
          />
        }
        {
          currentPage === 2 &&
          <Slide 
            src={"/img/todo-family.png"}
            hrefLive={"https://todofamily.samirlaguardia.com/"}
            hrefGithub={"https://github.com/samirls/todo-family-api"}
            skills={[
              { icon: <FaReact />, color: "blue.600"},
              { icon: <FaJava />, color: "orange.700"},
              { icon: <BiLogoSpringBoot />, color: "green.400"},
              { icon: <BiLogoPostgresql />, color: "blue.700" },
            ]}
          />
        }
        {
          currentPage === 3 &&
          <Slide 
            src={"/img/minha-clinica.png"}
            hrefLive={"notDeployed"}
            hrefGithub={"https://github.com/samirls/med-track-api"}
            skills={[
              { icon: <TbBrandNextjs/>, color: "gray.800"},
              { icon: <FaJava />, color: "orange.700"},
              { icon: <BiLogoSpringBoot />, color: "green.400"},
              { icon: <BiLogoPostgresql />, color: "blue.700" },
            ]}
          />
        }
        {
          currentPage === 4 &&
          <Slide 
            src={"/img/workout-buddy.png"}
            hrefLive={"notDeployed"}
            hrefGithub={"https://github.com/samirls/workout-buddy-be"}
            skills={[
              { icon: <FaReact/>, color: "blue.600"},
              { icon: <SiExpress />, color: "black"},
              { icon: <SiMongoose />, color: "red.700"},
              { icon: <SiMongodb />, color: "green.600" },
            ]}
          />
        }
        {
          currentPage === 5 &&
          <Slide 
            src={"/img/speed-typing.png"}
            hrefLive={"https://samirls.github.io/speedtyping/index.html"}
            hrefGithub={"https://github.com/samirls/speedtyping"}
            skills={[
              { icon: <FaHtml5 />, color: "red.400"},
              { icon: <FaCss3Alt />, color: "blue"},
              { icon: <SiJavascript />, color: "yellow.300"},
            ]}
          />
        }
        {
          currentPage === 6 &&
          <Slide 
            src={"/img/movie-blog.png"}
            hrefLive={"notDeployed"}
            hrefGithub={"https://github.com/samirls/admin-Dashboard"}
            skills={[
              { icon: <FaHtml5 />, color: "red.400"},
              { icon: <FaCss3Alt />, color: "blue"},
              { icon: <SiJavascript />, color: "yellow.300"},
            ]}
          />
        }
        {
          currentPage === 7 &&
          <Slide 
            src={"/img/escala-glasgow.png"}
            hrefLive={"https://samirls.github.io/glasgow/"}
            hrefGithub={"https://github.com/samirls/glasgow"}
            skills={[
              { icon: <FaHtml5 />, color: "red.400"},
              { icon: <FaCss3Alt />, color: "blue"},
              { icon: <SiJavascript />, color: "yellow.300"},
            ]}
          />
        }
        {
          currentPage === 8 &&
          <Slide 
            src={"/img/calculadora-trabalhista.png"}
            hrefLive={"https://samirls.github.io/calculadoraclt/"}
            hrefGithub={"https://github.com/samirls/calculadoraclt"}
            skills={[
              { icon: <FaHtml5 />, color: "red.400"},
              { icon: <FaCss3Alt />, color: "blue"},
              { icon: <SiJavascript />, color: "yellow.300"},
            ]}
          />
        }
        <Box>
          <Box display="flex" justifyContent='center' alignItems='center' width='100%' pt='15px' bottom='5' gap='6' >
            <FaChevronLeft fontSize='2rem' cursor='pointer' onClick={goToPreviousPage}/>
            <Box display="flex" fontSize='0.8rem' gap='1'>
              <BsCircle cursor='pointer' onClick={() => setCurrentPage(1)} style={{background: currentPage === 1 ? "black" : "transparent", borderRadius: '50%'}}/>
              <BsCircle cursor='pointer' onClick={() => setCurrentPage(2)} style={{background: currentPage === 2 ? "black" : "transparent", borderRadius: '50%'}}/>
              <BsCircle cursor='pointer' onClick={() => setCurrentPage(3)} style={{background: currentPage === 3 ? "black" : "transparent", borderRadius: '50%'}}/>
              <BsCircle cursor='pointer' onClick={() => setCurrentPage(4)} style={{background: currentPage === 4 ? "black" : "transparent", borderRadius: '50%'}}/>
              <BsCircle cursor='pointer' onClick={() => setCurrentPage(5)} style={{background: currentPage === 5 ? "black" : "transparent", borderRadius: '50%'}}/>
              <BsCircle cursor='pointer' onClick={() => setCurrentPage(6)} style={{background: currentPage === 6 ? "black" : "transparent", borderRadius: '50%'}}/>
              <BsCircle cursor='pointer' onClick={() => setCurrentPage(7)} style={{background: currentPage === 7 ? "black" : "transparent", borderRadius: '50%'}}/>
              <BsCircle cursor='pointer' onClick={() => setCurrentPage(8)} style={{background: currentPage === 8 ? "black" : "transparent", borderRadius: '50%'}}/>
            </Box>
            <FaChevronRight fontSize='2rem' cursor='pointer' onClick={goToNextPage}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Carousel;
