import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function VerticalSlider() {
    const navSlider = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const sliderForSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        afterChange: (index) => setActiveSlide(index),
    };

    const sliderNavSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: navSlider.current,
        dots: true,
        focusOnSelect: true,
    };

    const handleSlideChange = (index) => {
        if (navSlider.current) {
            navSlider.current.slick.slickGoTo(index);
            setActiveSlide(index);
        }
    };

    return (
        <div className="main">
            <Slider {...sliderForSettings} className="slider slider-for">
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
            </Slider>
            <Slider {...sliderNavSettings} className="slider slider-nav" ref={navSlider}>
                <div ><h3 className={activeSlide === 0 ? 'active1' : ''}>1</h3></div>
                <div><h3 className={activeSlide === 1 ? 'active1' : ''}>2</h3></div>
                <div><h3 className={activeSlide === 2 ? 'active1' : ''}>3</h3></div>
                <div><h3 className={activeSlide === 3 ? 'active1' : ''}>4</h3></div>
                <div><h3 className={activeSlide === 4 ? 'active1' : ''}>5</h3></div>
            </Slider>
            {/*<div className="action">*/}
            {/*    <button onClick={() => handleSlideChange(0)}>go to slide 1</button>*/}
            {/*    <button onClick={() => handleSlideChange(1)}>go to slide 2</button>*/}
            {/*    <button onClick={() => handleSlideChange(2)}>go to slide 3</button>*/}
            {/*    <button onClick={() => handleSlideChange(3)}>go to slide 4</button>*/}
            {/*    <button onClick={() => handleSlideChange(4)}>go to slide 5</button>*/}
            {/*</div>*/}
        </div>
    );
}


export default VerticalSlider;

