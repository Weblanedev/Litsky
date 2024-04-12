import React, { Component } from 'react';
import team from "../../../data/team.json";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    dotsClass: "d-flex slick-dots",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: true,
            slidesToShow: 3
        }
    }, {
        breakpoint: 992,
        settings: {
            arrows: true,
            slidesToShow: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2
        }
    }, {
        breakpoint: 576,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
        }
    }]
}


class Team extends Component {
    render() {
        return (
            <section className="section-padding parallax our-team">
                <div className="overlay overlay-bg-black" />
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-white">Our Team</h3>
                            <div className="section-description">
                                <p className="text-custom-white">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings} className="team-slider arrow-layout-2 row">
                                {/* Data */}
                                {team.map((item, i) => (
                                    <div key={i} className="slide-item col-12">
                                        <div className="team-block p-relative">
                                            <div className="inner-box bx-wrapper">
                                                <div className="image animate-img">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} className="full-width" />
                                                </div>
                                                <div className="lower-content p-relative text-center">
                                                    <div className="icon-box fs-18 text-custom-white">
                                                        <span className="far fa-heart" />
                                                    </div>
                                                    <h4><Link to="#" className="text-custom-black fw-600 fs-20">{item.name}</Link></h4>
                                                    <p className="designation text-light-dark">{item.post}</p>
                                                </div>
                                                <ul className="team-social-box custom">
                                                    {item.social.map((social, i) => (
                                                        <li key={i}>
                                                            <Link to={social.link} className={"fs-16 " + social.icon} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
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

export default Team;