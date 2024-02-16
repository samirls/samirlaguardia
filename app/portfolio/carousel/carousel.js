"use client";

import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import "animate.css";
import SingleSlide from "./SingleSlide";
import { SlidesData } from "./SlidesData.js";

function Carousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideAnimation, setSlideAnimation] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = SlidesData.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      Promise.all(imagePromises)
        .then(() => setImagesLoaded(true))
        .catch((error) => console.error("Erro ao carregar imagens:", error));
    };

    preloadImages();
  }, []);

  const images = SlidesData.map((slide) => slide.src);

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setSlideAnimation(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setSlideAnimation(false);
      }, 200);
    }
  };

  const goToNextPage = () => {
    if (currentPage < images.length - 1) {
      setSlideAnimation(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setSlideAnimation(false);
      }, 200);
    }
  };

  const renderSlide = (index) => {
    const { src, liveLink, githubLink, skills } = SlidesData[index];
    return (
      <SingleSlide
        key={index}
        src={src}
        slideAnimation={slideAnimation}
        hrefLive={liveLink}
        hrefGithub={githubLink}
        skills={skills}
      />
    );
  };

  const renderNavigationCircles = () => {
    return SlidesData.map((_, index) => (
      <BsCircle
        key={index}
        cursor="pointer"
        onClick={() => setCurrentPage(index)}
        style={{
          background: currentPage === index ? "black" : "transparent",
          borderRadius: "50%",
        }}
      />
    ));
  };

  if (!imagesLoaded) {
    return <div>Carregando...</div>;
  }

  return (
    <Box display="flex" justifyContent="center">
        <Box className="animate__animated animate__fadeIn">
          {renderSlide(currentPage)}
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
                {renderNavigationCircles()}
              </Box>
              <FaChevronRight
                fontSize="2rem"
                cursor="pointer"
                onClick={goToNextPage}
              />
            </Box>
          </Box>
        </Box>
    </Box>
  );
}

export default Carousel;
