import React from 'react'
import { Carousel } from 'react-bootstrap';
import Rainbow from '../rainbow.png'
import TaylorLav from '../Taylor_Lavender.png'
import Chase from '../chase.png'
import Lavender from '../lavender.png'
import Arena from '../arena.png'

import './slideshow.css'

function Slideshow(){
    return(
        <div className='carouselDiv'>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                    className='d-block w-10 mx-auto'
                    src={`${Rainbow}`} alt='temp alt text'
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className='d-block w-10 mx-auto'
                    src={`${TaylorLav}`} alt='temp alt text'
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className='d-block w-10 mx-auto'
                    src={`${Lavender}`} alt='temp alt text'
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className='d-block w-10 mx-auto'
                    src={`${Chase}`} alt='temp alt text'
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className='d-block w-10 mx-auto'
                    src={`${Arena}`} alt='temp alt text'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slideshow;