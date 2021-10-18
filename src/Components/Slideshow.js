import React from 'react'
import { Carousel } from 'react-bootstrap';
import Rainbow from '../assets/Images/rainbow.png'
import TaylorLav from '../assets/Images/Taylor_Lavender.png'
import Chase from '../assets/Images/chase.png'
import Lavender from '../assets/Images/lavender.png'
import Arena from '../assets/Images/arena.png'
import Jeremy from '../assets/Images/jeremy.png'
import Cry from '../assets/Images/cry.png'
import Remnant from '../assets/Images/remnant.png'

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
                <Carousel.Item interval={5000}>
                    <img
                    className='d-block w-10 mx-auto'
                    src={`${Cry}`} alt='temp alt text'
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className='d-block w-10 mx-auto'
                    src={`${Remnant}`} alt='temp alt text'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slideshow;