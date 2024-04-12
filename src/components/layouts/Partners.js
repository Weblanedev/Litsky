import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import partners from "../../data/partners.json"

const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: "d-flex slick-dots",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                slidesToShow: 5
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 4
            }
        }, {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3
            }
        }, {
            breakpoint: 400,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2
            }
        }
    ]
};

class Partners extends Component {
    render() {
        return (
            <section className="section-padding partners">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black">Our Partners</h3>
                            <div className="section-description">
                                <p className="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings} className="partners-slider arrow-layout-2 row">
                                {/* Data */}
                                {partners.map((item, i) => (
                                    <div key={i} className="slide-item col-12">
                                        <div className="partner-box animate-img bx-wrapper">
                                            <Link to="#">
                                                <img src={process.env.PUBLIC_URL + "/" + item.image} className="img-fluid image-fit" alt="img" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                                {/* Data */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Partners;