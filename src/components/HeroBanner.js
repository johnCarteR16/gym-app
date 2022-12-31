import React from 'react'
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png'

export const HeroBanner = () => {
    return (
        <Box
            sx= {{
                mt: {lg: '100px', xs: '70px'},
                ml: {sm: '50px'}
            }}
        >
            <Typography color='#FF2625' fontWeight='600' fontSize='26px' >
                Fitness Club
            </Typography>
            <Typography fontWeight={600} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb= '10px' mt='10px' lineHeight="45px" >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb='4px'>
                Check out the most effective exercises
            </Typography>
            <Button variant="contained" padding="10px" color='error' href='#exercises' sx={{backgroundColor:'#ff2625'}}>Explore Exercises</Button>
            <Typography
                fontWeight={600}
                color='#ff2625'
                fontSize='200px'
                sx={{
                    opacity: 0.1,
                    display: {lg: 'block', xs: 'none'}
                }}
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
        </Box>
    )
}
