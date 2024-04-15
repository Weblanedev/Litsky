import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Footer from '../layouts/Footer';
// import Content from '../sections/about/Content';
import Header from '../layouts/Header';

const pagelocation = "About Us";
class About extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Litsky - Tour Booking  | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                {/* <Content /> */}
                <div className='container about-us-page'>
                    <h1 className=''>About Us</h1>
                    <div className='about-us-page__intro-text'>Welcome to LitSky, your ultimate destination for booking unforgettable tours and experiences to exciting places around the world. <br /> Discover a wide range of curated itineraries, from thrilling adventure tours to cultural explorations and everything in between.</div>
                    <div className='content-grid'>
                        <div className='about-content'>
                            <div className='about-content__point'><figure><img alt="user friendly icon" src="/assets/images/user-friendly.svg" /></figure><p>With our user-friendly platform, booking your dream tour has never been easier.</p></div>
                            <div className='about-content__point'><figure><img alt="rocket icon" src="/assets/images/icon-rocket.svg" /></figure><p>Trust our expert guides and reliable partners to ensure a seamless and memorable travel experience.</p></div>
                            <div className='about-content__point'><figure><img src="/assets/images/icon-rocket.svg" /></figure><p>Start your journey today and create lifelong memories with Parceltube.</p></div>
                        </div>
                        <figure className='right-illustration-container'>

                        <img className='right-illustration' alt="right illustration icon" src="/assets/images/airplane.svg" />
                        </figure>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default About;