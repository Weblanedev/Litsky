import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import service from '../../../data/service.json';

class Services extends Component {
    render() {
        return (
            <section className="section-padding section our-services-sec bg-light-white">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black">Our Services</h3>
                            <div className="section-description">
                                <p className="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                        <div className="section-btn mb-xl-20">
                            <Link to="/booking" className="btn-first btn-small">View All</Link>
                        </div>
                    </div>
                    <div className="row">
                        {/* Data */}
                        {service.slice(0, 4).map((item, i) => (
                            <div className="col-lg-6" key={i}>
                                <div className="service-box p-relative mb-xl-30">
                                    <div className="service-wrapper bg-custom-white bx-wrapper">
                                        <div className="service-img animate-img">
                                            <Link to={item.link}>
                                                <img src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt={item.title} />
                                            </Link>
                                        </div>
                                        <div className="service-text padding-15">
                                            <h5><Link to={item.link} className="text-custom-black">{item.title}</Link></h5>
                                            <p className="text-light-dark">{item.text}</p>
                                            <Link to={item.link} className="btn-second btn-small">See All</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;