import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRecentHotel } from "../../../helper/hotelHelper";
import Slider from 'react-slick';

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
};

class Recomhotels extends Component {
    render() {
        return (
            <section className="section-padding hotels-sec bg-light-white">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black">Recommended Hotels</h3>
                            <div className="section-description">
                                <p className="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings} className="hotel-slider arrow-layout-2 row">
                                {/* Data */}
                                {getRecentHotel().map((item, i) => (
                                    <div key={i} className="slide-item col-12">
                                        <div className="hotel-grid">
                                            <div className="hotel-grid-wrapper bx-wrapper">
                                                <div className="image-sec animate-img">
                                                    <Link to={"/hotel-details/" + item.id}>
                                                        <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="full-width" alt={item.title} />
                                                    </Link>
                                                </div>
                                                <div className="hotel-grid-caption padding-20 bg-custom-white p-relative">
                                                    <h4 className="title fs-16"><Link to={"/hotel-details/" + item.id} className="text-custom-black">{item.title}<small className="text-light-dark">{item.location}</small></Link></h4>
                                                    <span className="price"><small>avg/night</small>${new Intl.NumberFormat().format((item.price).toFixed(0))}</span>
                                                    <div className="action">
                                                        <Link to={"/hotel-details/" + item.id} className="btn-second btn-small">View</Link>
                                                        <Link to="/booking" className="btn-first btn-submit">Book</Link>
                                                    </div>
                                                </div>
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

export default Recomhotels;