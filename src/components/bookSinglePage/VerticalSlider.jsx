import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import BookSliderImg from '../../assets/images/book-slider-img.png';
import BookSliderImg1 from '../../assets/images/book-slider-img-1.png';
import BookSliderImg2 from '../../assets/images/book-slider-img-2.png';
import BookSliderImg3 from '../../assets/images/book-slider-img-3.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VerticalSlider = () => {
    const images = [
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(88).webp',
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp',
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp',
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(88).webp',
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp',
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp',
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(88).webp',
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp',
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp',
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(88).webp',
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp',
        // 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp',
        // Add more image URLs here
        BookSliderImg,
        BookSliderImg1,
        BookSliderImg2,
        BookSliderImg3,

    ];

    const [activeSlide, setActiveSlide] = useState(0);
    const mainSliderRef = React.createRef();
    const thumbnailSliderRef = React.createRef();

    // Load the stored active slide from localStorage on component mount
    useEffect(() => {
        const storedSlide = localStorage.getItem('activeSlide');
        if (storedSlide !== null) {
            setActiveSlide(parseInt(storedSlide));
        }
    }, []);

    // Save the active slide to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('activeSlide', activeSlide.toString());
    }, [activeSlide]);


    const mainSliderSettings = {
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,

        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_, nextSlide) => {
            setActiveSlide(nextSlide);
        },
    };

    const thumbnailSliderSettings = {
        dots: false,
        infinite: true,
        nextArrow: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18.0283 9.14267L11.9994 14.2144L5.97051 9.14267C5.8628 9.05187 5.7182 9.00104 5.56762 9.00104C5.41705 9.00104 5.27245 9.05187 5.16473 9.14267C5.11258 9.18677 5.07114 9.23941 5.04286 9.29751C5.01457 9.3556 5 9.41798 5 9.481C5 9.54401 5.01457 9.60639 5.04286 9.66449C5.07114 9.72258 5.11258 9.77522 5.16473 9.81932L11.5784 15.2159C11.691 15.3106 11.8421 15.3636 11.9994 15.3636C12.1567 15.3636 12.3077 15.3106 12.4204 15.2159L18.834 9.82036C18.8866 9.77623 18.9283 9.72346 18.9568 9.66517C18.9853 9.60689 19 9.54426 19 9.481C19 9.41773 18.9853 9.35511 18.9568 9.29682C18.9283 9.23853 18.8866 9.18577 18.834 9.14163C18.7263 9.05083 18.5817 9 18.4311 9C18.2806 9 18.136 9.05083 18.0283 9.14163V9.14267Z" fill="#4C4C4C" stroke="#4C4C4C"/>
        </svg>,
        prevArrow: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5.97175 14.8573L12.0006 9.78558L18.0295 14.8573C18.1372 14.9481 18.2818 14.999 18.4324 14.999C18.583 14.999 18.7275 14.9481 18.8353 14.8573C18.8874 14.8132 18.9289 14.7606 18.9571 14.7025C18.9854 14.6444 19 14.582 19 14.519C19 14.456 18.9854 14.3936 18.9571 14.3355C18.9289 14.2774 18.8874 14.2248 18.8353 14.1807L12.4216 8.78414C12.309 8.68939 12.1579 8.63636 12.0006 8.63636C11.8433 8.63636 11.6923 8.68939 11.5796 8.78414L5.16597 14.1796C5.11344 14.2238 5.0717 14.2765 5.04319 14.3348C5.01468 14.3931 5 14.4557 5 14.519C5 14.5823 5.01468 14.6449 5.04319 14.7032C5.0717 14.7615 5.11344 14.8142 5.16597 14.8584C5.27368 14.9492 5.41828 15 5.56886 15C5.71943 15 5.86403 14.9492 5.97175 14.8584V14.8573Z" fill="#4C4C4C" stroke="#4C4C4C"/>
    </svg>,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        beforeChange: (_, nextSlide) => {
            if (mainSliderRef.current) {
                mainSliderRef.current.slickGoTo(nextSlide);
            }
        },
    };



    return (
        <div className="vertical-clickable-thumbnail-slider-container">
            <div className="main-slider">
                <Slider ref={mainSliderRef} {...mainSliderSettings}>
                    {images.map((image, index) => (
                        <div key={index}  className='h-[558px]'>
                            <img src={image} alt={`Slide ${index}`}  className='h-full'/>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="thumbnail-slider mt-[20px]">
                <Slider ref={thumbnailSliderRef} {...thumbnailSliderSettings}>
                    {images.map((image, index) => (
                        <div key={index} className='w-full max-w-[120px] h-[150px] mt-[10px]'>
                            <img src={image} alt={`Thumbnail ${index}`} className='w-full h-full' />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default VerticalSlider;