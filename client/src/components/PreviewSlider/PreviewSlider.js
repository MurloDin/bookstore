import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PreviewSlider.scss";

const PreviewSlider = ({items}) => {
    const settings = {
        arrows: false,
        dots: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {
                items.map((item, idx) => {
                    return (
                        <section
                            className="slider-card"
                            key={idx}>
                            <div style={{
                                backgroundImage: `url("${item.imagePath}")`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: "100vw",
                                height: "100vh",
                            }}>
                                <div className="container">
                                    <div className="slider-card__content-wrapper">
                                        <div className="slider-card__title">{item.title}</div>
                                        <div className="slider-card__subtitle">{item.subtitle}</div>
                                        <button className="slider-card__btn">Узнать больше</button>
                                    </div>
                                </div>
                            </div>

                        </section>
                    )
                })
            }
        </Slider>
    );
};


export default PreviewSlider;
