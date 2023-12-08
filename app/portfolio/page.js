import { Box } from '@chakra-ui/react'
import React from 'react'
import Carousel from './carousel/carousel'
import 'animate.css';

function Portfolio() {
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
      <Box fontSize="2rem" pl="10px" fontWeight="500" className="animate__animated animate__fadeIn">
        Portfólio
      </Box>
      <Box height='55vh' className="animate__animated animate__fadeIn">
        <Carousel />
      </Box>


    </Box>
  </Box>
  )
}

export default Portfolio