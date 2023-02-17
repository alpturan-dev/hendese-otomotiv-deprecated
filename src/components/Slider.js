import React from 'react'
import { Box, Typography } from '@mui/material'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import yedekparca1 from '../assets/yedekparca1.jpeg'
import yedekparca2 from '../assets/yedekparca2.jpeg'

function Slider() {

    return (
        <>
            <Box sx={{ paddingBottom: "70px", width: "100%", height: "200px" }}>
                <Typography variant='h4' sx={{ display: "flex", fontWeight: "bolder", alignItems: "center", justifyContent: "center", paddingBottom: "20px", paddingTop: "10px" }}>
                    Hendese Otomotiv Suzuki Yedek Parça
                </Typography>
                <Box sx={{ borderTop: "1px solid gray", borderBottom: "1px solid #ddd" }}>
                    <Carousel showThumbs={false} showStatus={false} emulateTouch={true} autoPlay infiniteLoop>
                        <div>
                            <img
                                alt={yedekparca1}
                                src={yedekparca1}
                                height="400rem"
                                style={{ objectFit: "cover" }} />
                        </div>
                        <div>
                            <img
                                alt={yedekparca2}
                                src={yedekparca2}
                                height="400rem"
                                style={{ objectFit: "cover" }} />
                        </div>
                    </Carousel>
                </Box>
            </Box>
        </>
    )
}

export default Slider