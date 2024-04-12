import React, { Component } from 'react';
import testimonials from "../../../data/testimonials.json";
import Slider from "react-slick";
import { getAuthor, Rating } from '../../../helper/helper';


const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: "d-flex slick-dots",
    autoplay: true,
    speed: 1000,
    cssEase: 'linear',
};

class Testimonials extends Component {
    render() {
        return (
            <div className="testimonial-box">
                <div className="section-header style-right">
                    <div className="section-heading">
                        <h3 className="text-custom-black">Testimonials</h3>
                        <div className="section-description">
                            <p className="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-wrapper">
                    <Slider {...settings} className="testimonial-for">
                        {/* Data */}
                        {testimonials.map((item, i) => (
                            <div key={i} className="slide-item">
                                <div className="testimonial">
                                    <div className="rating">
                                        {Rating(item.rating)}
                                    </div>
                                    <p className="text-light-dark">“{item.text}”</p>
                                    {getAuthor(item.author).map((author, i) => (
                                        <p className="text-custom-black author" key={i}>
                                            <strong>{author.name}</strong><br />{author.post}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {/* Data */}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Testimonials;