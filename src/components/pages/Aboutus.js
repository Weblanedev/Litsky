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
                                        <h3 className="text-custom-black">Why Choose Us?</h3>
                                        <div className="section-description">
                                            <p className="text-light-black subheading">We make all the process easy, stress free and swift. Your travelling experience is 100% optimized with us.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-light-dark">From booking all through to payments, we streamline the flow and take out unnecessary steps. We tailor the travelling experience to your tastes. Tell us what you want, and we make it happen</p>
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
                                {/* <Link to="/about" className="btn-first btn-submit">Learn More</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Aboutus;