import React from 'react';
import Slider from "react-slick";
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';

const OurWork = () => {
    const carousel = [
        {
            img: carousel1
        },
        {
            img: carousel2
        },
        {
            img: carousel3
        }

    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="">
            <h4 className="section-title text-white text-center pt-xl-5">
                Here are some of <span className="brand-green">our works</span>
            </h4>
            <div className="py-xl-5 py-2">
                <Slider {...settings} className="pt-3 pb-5">
                    {carousel.map((carousel) => (
                        <div className=" img-fluid">
                            <img src={carousel.img} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>


    );
};

export default OurWork;