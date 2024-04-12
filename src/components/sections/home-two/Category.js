import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import category from "../../../data/ourcategory.json";

class Category extends Component {
    render() {
        return (
            <section className="section-padding our-work-sec">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black">Our Work</h3>
                            <div className="section-description">
                                <p className="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                        <div className="section-btn mb-xl-20">
                            <Link to="/booking" className="btn-first btn-small">View All</Link>
                        </div>
                    </div>
                    <div className="row">
                        {/* Data */}
                        {category.slice(0, 1).map((item, i) => (
                            <div className="col-lg-6" key={i}>
                                <div className="work-sec animate-img first-box">
                                    <Link to={item.link}>
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt={item.title} />
                                        <div className="text-wrapper">
                                            <h2 className="text-custom-white no-margin fw-600">{item.title}</h2>
                                            <p className="text-custom-white no-margin">{item.text}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        {/* Data */}
                        <div className="col-lg-6">
                            <div className="row">
                                {/* Data */}
                                {category.slice(1, 3).map((item, i) => (
                                    <div className="col-sm-6" key={i}>
                                        <div className="work-sec animate-img">
                                            <Link to={item.link}>
                                                <img src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt={item.title} />
                                                <div className="text-wrapper">
                                                    <h2 className="text-custom-white no-margin fw-600">{item.title}</h2>
                                                    <p className="text-custom-white no-margin">{item.text}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                                {/* Data */}
                            </div>
                            <div className="row">
                                {/* Data */}
                                {category.slice(3, 4).map((item, i) => (
                                    <div className="col-12" key={i}>
                                        <div className="work-sec animate-img">
                                            <Link to={item.link}>
                                                <img src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt={item.title} />
                                                <div className="text-wrapper">
                                                    <h2 className="text-custom-white no-margin fw-600">{item.title}</h2>
                                                    <p className="text-custom-white no-margin">{item.text}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                                {/* Data */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Category;