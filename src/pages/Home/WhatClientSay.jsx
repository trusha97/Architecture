import React from 'react'
import "./WhatClientSay.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { quite } from '../../Utils/images';

const testimonials = [
    {
        name: "WILLIAM ANDREW",
        text1: "It sounds like you’re looking common phrases or",
        highlight: "feedback that clients might say when discussing.",
        text2:
            "Architecture projects. Here’s a list of things architecture clients might say architecture. We need the space to be flexible and multi-functional.",
    },
    {
        name: "SARAH JANE",
        text1: "It sounds like you’re looking common phrases or",
        highlight: "feedback that clients might say when discussing.",
        text2:
            "Architecture projects. Here’s a list of things architecture clients might say architecture. We need the space to be flexible and multi-functional.",
    },
];

const WhatClientSay = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };
    return (
        <div className='what-clientsays-main-div'>
            <div className='what-client-main-div'>
                <div className=''>
                    <div className='outlined-main-div1'>
                        <div class="outlined-text1">What Client Says</div>
                    </div>
                </div>

                <div className="testimonial-container">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="testimonial-slide">
                                <div className='quite-desc-div'>
                                    <div className="quote-icon">
                                        <img src={quite} alt="quote icon" />
                                    </div>
                                    <div className='quite-text-div'>
                                        <h3 className="client-name">{testimonial.name}</h3>
                                    </div>
                                </div>
                                <div className='quite-div-main-desc'>
                                    <p className="testimonial-text">
                                        {testimonial.text1} <span className="highlight">{testimonial.highlight}</span>
                                    </p>
                                    <p className="testimonial-text">{testimonial.text2}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default WhatClientSay
