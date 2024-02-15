"use client";

import { Box, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  BiLogoTypescript,
  BiLogoSpringBoot,
  BiLogoPostgresql,
} from "react-icons/bi";
import { SiMongodb, SiExpress, SiMongoose, SiJavascript } from "react-icons/si";
import { BsCircle } from "react-icons/bs";
import "animate.css";
import SingleSlide from "./SingleSlide";
import { useEffect } from "react";

function PreloadImages({ images, onLoad }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const promises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(promises)
      .then(() => {
        setLoaded(true);
        if (onLoad) onLoad();
      })
      .catch((error) => console.error("Failed to preload images:", error));
  }, [images, onLoad]);

  return loaded ? null : (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="500px"
    >
      <Box>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    </Box>
  );
}

function Carousel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [slideAnimation, setSlideAnimation] = useState(false);

  const images = [
    "/img/task-list-app.png",
    "/img/drake-equation.png",
    "/img/todo-family.png",
    "/img/minha-clinica.png",
    "/img/workout-buddy.png",
    "/img/speed-typing.png",
    "/img/movie-blog.png",
    "/img/escala-glasgow.png",
    "/img/calculadora-trabalhista.png",
  ];

  const handleImagesLoad = () => {
    setImagesLoaded(true);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setSlideAnimation(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setSlideAnimation(false);
      }, 200);
    }
  };

  const goToNextPage = () => {
    if (currentPage < 9) {
      setSlideAnimation(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setSlideAnimation(false);
      }, 200);
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <PreloadImages images={images} onLoad={handleImagesLoad} />
      {imagesLoaded && (
        <Box className="animate__animated animate__fadeIn">
          {currentPage === 1 && (
            <SingleSlide
              src={"/img/task-list-app.png"}
              slideAnimation={slideAnimation}
              hrefLive={"https://todo-next-14-kappa.vercel.app/"}
              hrefGithub={"https://github.com/samirls/todo-next-14"}
              skills={[
                { icon: <TbBrandNextjs />, color: "gray.800" },
                { icon: <BiLogoTypescript />, color: "blue.500" },
                { icon: <BiLogoPostgresql />, color: "blue.700" },
              ]}
            />
          )}
          {currentPage === 2 && (
            <SingleSlide
              src={"/img/drake-equation.png"}
              slideAnimation={slideAnimation}
              hrefLive={"https://drake-equation-next-14.vercel.app/"}
              hrefGithub={"https://github.com/samirls/drake-equation-next-14"}
              skills={[
                { icon: <TbBrandNextjs />, color: "gray.800" },
                { icon: <BiLogoTypescript />, color: "blue.500" },
                { icon: <BiLogoPostgresql />, color: "blue.700" },
              ]}
            />
          )}
          {currentPage === 3 && (
            <SingleSlide
              src={"/img/todo-family.png"}
              slideAnimation={slideAnimation}
              hrefLive={"notDeployed"}
              hrefGithub={"https://github.com/samirls/todo-family-api"}
              skills={[
                { icon: <FaReact />, color: "blue.600" },
                { icon: <FaJava />, color: "orange.700" },
                { icon: <BiLogoSpringBoot />, color: "green.400" },
                { icon: <BiLogoPostgresql />, color: "blue.700" },
              ]}
            />
          )}
          {currentPage === 4 && (
            <SingleSlide
              src={"/img/minha-clinica.png"}
              slideAnimation={slideAnimation}
              hrefLive={"notDeployed"}
              hrefGithub={"https://github.com/samirls/med-track-api"}
              skills={[
                { icon: <TbBrandNextjs />, color: "gray.800" },
                { icon: <FaJava />, color: "orange.700" },
                { icon: <BiLogoSpringBoot />, color: "green.400" },
                { icon: <BiLogoPostgresql />, color: "blue.700" },
              ]}
            />
          )}
          {currentPage === 5 && (
            <SingleSlide
              src={"/img/workout-buddy.png"}
              slideAnimation={slideAnimation}
              hrefLive={"notDeployed"}
              hrefGithub={"https://github.com/samirls/workout-buddy-be"}
              skills={[
                { icon: <FaReact />, color: "blue.600" },
                { icon: <SiExpress />, color: "black" },
                { icon: <SiMongoose />, color: "red.700" },
                { icon: <SiMongodb />, color: "green.600" },
              ]}
            />
          )}
          {currentPage === 6 && (
            <SingleSlide
              src={"/img/speed-typing.png"}
              slideAnimation={slideAnimation}
              hrefLive={"https://samirls.github.io/speedtyping/index.html"}
              hrefGithub={"https://github.com/samirls/speedtyping"}
              skills={[
                { icon: <FaHtml5 />, color: "red.400" },
                { icon: <FaCss3Alt />, color: "blue" },
                { icon: <SiJavascript />, color: "yellow.300" },
              ]}
            />
          )}
          {currentPage === 7 && (
            <SingleSlide
              src={"/img/movie-blog.png"}
              slideAnimation={slideAnimation}
              hrefLive={"notDeployed"}
              hrefGithub={"https://github.com/samirls/admin-Dashboard"}
              skills={[
                { icon: <FaHtml5 />, color: "red.400" },
                { icon: <FaCss3Alt />, color: "blue" },
                { icon: <SiJavascript />, color: "yellow.300" },
              ]}
            />
          )}
          {currentPage === 8 && (
            <SingleSlide
              src={"/img/escala-glasgow.png"}
              slideAnimation={slideAnimation}
              hrefLive={"https://samirls.github.io/glasgow/"}
              hrefGithub={"https://github.com/samirls/glasgow"}
              skills={[
                { icon: <FaHtml5 />, color: "red.400" },
                { icon: <FaCss3Alt />, color: "blue" },
                { icon: <SiJavascript />, color: "yellow.300" },
              ]}
            />
          )}
          {currentPage === 9 && (
            <SingleSlide
              src={"/img/calculadora-trabalhista.png"}
              slideAnimation={slideAnimation}
              hrefLive={"https://samirls.github.io/calculadoraclt/"}
              hrefGithub={"https://github.com/samirls/calculadoraclt"}
              skills={[
                { icon: <FaHtml5 />, color: "red.400" },
                { icon: <FaCss3Alt />, color: "blue" },
                { icon: <SiJavascript />, color: "yellow.300" },
              ]}
            />
          )}
          <Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              pt="15px"
              bottom="5"
              gap="6"
            >
              <FaChevronLeft
                fontSize="2rem"
                cursor="pointer"
                onClick={goToPreviousPage}
              />
              <Box display="flex" fontSize="0.8rem" gap="1">
                <BsCircle
                  cursor="pointer"
                  onClick={() => setCurrentPage(1)}
                  style={{
                    background: currentPage === 1 ? "black" : "transparent",
                    borderRadius: "50%",
                  }}
                />
                <BsCircle
                  cursor="pointer"
                  onClick={() => setCurrentPage(2)}
                  style={{
                    background: currentPage === 2 ? "black" : "transparent",
                    borderRadius: "50%",
                  }}
                />
                <BsCircle
                  cursor="pointer"
                  onClick={() => setCurrentPage(3)}
                  style={{
                    background: currentPage === 3 ? "black" : "transparent",
                    borderRadius: "50%",
                  }}
                />
                <BsCircle
                  cursor="pointer"
                  onClick={() => setCurrentPage(4)}
                  style={{
                    background: currentPage === 4 ? "black" : "transparent",
                    borderRadius: "50%",
                  }}
                />
                <BsCircle
                  cursor="pointer"
                  onClick={() => setCurrentPage(5)}
                  style={{
                    background: currentPage === 5 ? "black" : "transparent",
                    borderRadius: "50%",
                  }}
                />
                <BsCircle
                  cursor="pointer"
                  onClick={() => setCurrentPage(6)}
                  style={{
                    background: currentPage === 6 ? "black" : "transparent",
                    borderRadius: "50%",
                  }}
                />
                <BsCircle
                  cursor="pointer"
                  onClick={() => setCurrentPage(7)}
                  style={{
                    background: currentPage === 7 ? "black" : "transparent",
                    borderRadius: "50%",
                  }}
                />
                <BsCircle
                  cursor="pointer"
                  onClick={() => setCurrentPage(8)}
                  style={{
                    background: currentPage === 8 ? "black" : "transparent",
                    borderRadius: "50%",
                  }}
                />
                <BsCircle
                  cursor="pointer"
                  onClick={() => setCurrentPage(9)}
                  style={{
                    background: currentPage === 9 ? "black" : "transparent",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <FaChevronRight
                fontSize="2rem"
                cursor="pointer"
                onClick={goToNextPage}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Carousel;
