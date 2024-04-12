import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import bannerpost from "../../../data/banner.json";

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    dots: false,
    dotsClass: "d-flex slick-dots",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
        }
    }]
};

class Banner extends Component {
    render() {
        return (
            <div className="slider p-relative">
                <Slider {...settings} className="main-banner arrow-layout-1 ">
                    {/* Data */}
                    {bannerpost.map((item, i) => (
                        <div key={i}>
                            <div className="slide-item" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.image + ")" }}>
                                <div className="section-padding">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <div className="slider-content">
                                                    <h1 className="text-custom-white" dangerouslySetInnerHTML={{ __html: item.title }} />
                                                    <ul className="custom">
                                                        {/* Data */}
                                                        {item.accomondation.map((accomondation, i) => (
                                                            <li className="text-custom-white" key={i}>
                                                                <i className={accomondation.icon} />
                                                                {accomondation.title}
                                                            </li>
                                                        ))}
                                                        {/* Data */}
                                                    </ul>
                                                    <Link to={item.link} className="btn-first btn-small">Find Out More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </Slider>
            </div>
        );
    }
}

export default Banner;