import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cruiseblock from "../../../data/cruise/cruise.json";
import { Rating } from "../../../helper/helper";
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

class Recomcruise extends Component {
    render() {
        return (
            <section className="section-padding cruise-sec">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black">Cruise</h3>
                            {/* <div className="section-description">
                                <p className="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings} className="hotel-slider arrow-layout-2 row">
                                {/* Data */}
                                {cruiseblock.map((item, i) => (
                                    <div key={i} className="slide-item col-12">
                                        <div className="cruise-grid">
                                            <div className="cruise-grid-wrapper bx-wrapper">
                                                <div className="image-sec animate-img">
                                                    <Link to={"/cruise-details/" + item.id}>
                                                        <img src={process.env.PUBLIC_URL + "/" + item.image} className="full-width" alt={item.title} />
                                                    </Link>
                                                </div>
                                                <div className="cruise-grid-caption padding-20 bg-custom-white p-relative">
                                                    <h4 className="title fs-16 no-margin"><Link to={"/cruise-details/" + item.id} className="text-custom-black">{item.title}<small className="text-light-dark">{item.night} Nights</small></Link></h4>
                                                    <span className="price"><small>From</small>${new Intl.NumberFormat().format((item.price).toFixed(0))}</span>
                                                    <div className="feedback">
                                                        <div className="ratings">
                                                            <div className="rating">
                                                                {Rating(item.rating)}
                                                            </div>
                                                        </div>
                                                        <span className="review fs-12 text-light-white">{item.reviews.length} reviews</span>
                                                    </div>
                                                    <div className="row time">
                                                        <div className="date col-6">
                                                            <i className="far fa-clock text-yellow fs-18" />
                                                            <div className="text-light-dark fs-12">
                                                                <span className="text-custom-blue">Date</span><br />{item.cruisedate}
                                                            </div>
                                                        </div>
                                                        <div className="departure col-6">
                                                            <i className="fas fa-map-marker-alt text-yellow fs-18" />
                                                            <div className="text-light-dark fs-12">
                                                                <span className="text-custom-blue">Departure</span><br />{item.deplocation}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="action">
                                                        {/* <Link to={"/cruise-details/" + item.id} className="btn-second btn-small">View</Link> */}
                                                        <Link to={"/cruise-details/" + item.id} className="btn-first btn-submit">Book</Link>
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

export default Recomcruise;