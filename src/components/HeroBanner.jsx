import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Dope from '../assets/images/dope.gif';
function HeroBanner() {
  return (
    <Box 
    sx={{
        mt: { lg: '80px', xs: '70px'},
        ml: { sm: '40px'}
    }}
    position='relative'
    p='10px'>
      <Typography 
      color='#aa1001'
      fontWeight="800"
      fontSize='26px'>
        Gym Meditator
    </Typography>
    <Typography
    fontWeight='400'
    sx={{ fontSize: {lg: '44px', xs: '40px'}}}
    mb='10px' 
    >
      <i>Start where you are.<br></br>
         Use what you have.<br></br>
         Do what you can.</i>
    </Typography>
    <Typography
    fontSize='20px'
    lineHeight='35px'
    color='#aa1001'
    mb='10px'
    >
        <i>Check out the most effective exercises!.</i>
    </Typography>
    {/* <Typography
    fontWeight={600}
    color='#ff2625'
    sx={{ 
        opacity: 0.1,
        wordSpacing: {lg: '1px'},
        display: {lg: 'block', xs: 'none'}
    }}
    fontSize='200px'>
        <i>DRIVE</i>
    </Typography> */}
    <button href='#exercises'className='latter'>Explore</button>
    <img src={Dope} className='short'></img>
   </Box>
  )
}

export default HeroBanner;