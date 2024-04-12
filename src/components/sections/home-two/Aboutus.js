import React from 'react';
import { Link } from 'react-router-dom';
import whyus from "../../../data/whyus.json";
import Videohelper from '../../../helper/Videohelper';

class Aboutus extends Videohelper {
    render() {
        return (
            <section className="section-padding about-us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-right-side full-height mb-md-80">
                                <div className="about-img full-height">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/about.jpg"} className="img-fluid image-fit" alt="img" />
                                    <a rel={"external"} href={"https://www.youtube.com/watch?v=TKnufs85hXk"} className="video_btn popup-youtube transform-center">
                                        <i className="fas fa-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="about-left-side">
                                <div className="section-header">
                                    <div className="section-heading">
                                        <h3 className="text-custom-black">About Us</h3>
                                        <div className="section-description">
                                            <p className="text-light-black subheading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-light-dark">On the other hand, we denounce with righteous indignation the foult anuals dislike men who are so beguiled and demoralized by the nuhaiicharms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound toen sue; and equal blame belongs to those who fail in their duty.</p>
                                <ul className="custom">
                                    {/* Data */}
                                    {whyus.map((item, i) => (
                                        <li className="text-light-dark" key={i}>
                                            <i className="fas fa-hand-point-right text-custom-blue" />
                                            {item.title}
                                        </li>
                                    ))}
                                    {/* Data */}
                                </ul>
                                <Link to="/about" className="btn-first btn-submit">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Aboutus;