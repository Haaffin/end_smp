import React from 'react'
import { Carousel } from 'react-bootstrap';
import Rainbow from '../rainbow.png'
import TaylorLav from '../Taylor_Lavender.png'
import Chase from '../chase.png'
import Lavender from '../lavender.png'

import './slideshow.css'

function Slideshow(){
    return(
        <div className='carouselDiv'>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                    className='d-block w-10 mx-auto'
                    src={`${Rainbow}`}
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className='d-block w-10 mx-auto'
                    src={`${TaylorLav}`}
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className='d-block w-10 mx-auto'
                    src={`${Lavender}`}
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className='d-block w-10 mx-auto'
                    src={`${Chase}`}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slideshow;