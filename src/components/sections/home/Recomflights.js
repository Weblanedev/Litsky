import { Link } from 'react-router-dom';
import { getRecentFlight, getRoute } from "../../../helper/flightHelper";
import Slider from 'react-slick';
// import { CurrencyState } from '../../../Context/CurrencyContext';
// import { formatNumber } from "../../../utils";
import data from "../../../data/flights/flight.json"
import { useState } from 'react';


const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    dotsClass: "d-flex slick-dots",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [ {
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
            slidesToShow: 1
        }
    }, {
        breakpoint: 576,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
        }
    } ]
};

function Recomflights() {
    const [ displayCount, setDisplayCount ] = useState(9);

    // const {
    //     state: { currency, rate }
    // } = CurrencyState()

    return (
        <>
            <section className="section-padding flights-sec bg-light-white">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black">Top attractions </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings} className="flights-slider arrow-layout-2 row">
                                {getRecentFlight().map((item, i) => {
                                    return (
                                        <div key={i} className="slide-item col-12">
                                            <div className="flights-grid">
                                                <div className="flights-grid-wrapper bx-wrapper">
                                                    <div className="image-sec animate-img">
                                                        <Link to={`/booking/${i}`}>
                                                            <img src={process.env.PUBLIC_URL + "/" + item.image} className="full-width" alt={item.title} />
                                                        </Link>
                                                    </div>
                                                    <div className="flights-grid-caption padding-20 bg-custom-white p-relative card-footer">
                                                        <div className="heading-sec card-footer-sec">
                                                            <div className="left-side">
                                                                {/* <i className="fas fa-plane text-gray" /> */}
                                                                <div className="title">
                                                                    <h4 className="fs-16">
                                                                        <Link to={`/booking/${i}`} className="text-custom-black">{item.title}</Link>
                                                                        {getRoute(item.flightroute).map((route, i) => (
                                                                            <span className="text-light-dark" key={i}>{route.title}</span>
                                                                        ))}
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="right-side footer-right">
                                                                <span className="price" style={{ textAlign: 'left', lineHeight: '20px', textTransform: 'none' }}>₦{item.price} <small style={{ fontSize: '15px' }}>Per Person</small></span>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <Link to={`/booking/${i}`} className="btn-first btn-submit">Book Tour</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )}
                            </Slider>
                        </div>
                    </div>
                    <br />
                </div>
            </section>
            <section className="section-padding flights-sec bg-light-white">
                <div className="container" style={{ marginTop: '-90px' }}>
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black">Find More Tours </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="flights-slider arrow-layout-2 row col-md-12">
                            {data.slice(0, displayCount).map((item, i) => {
                                return (
                                    <>
                                        <div key={i} className="slide-item col-md-12 col-lg-4">
                                            <div className="flights-grid " style={{ marginTop: '25px' }}>
                                                <div className="flights-grid-wrapper bx-wrapper">
                                                    <div className="image-sec animate-img">
                                                        <Link to={`/booking/${i}`}>
                                                            <img src={process.env.PUBLIC_URL + "/" + item.image} className="full-width" alt={item.title} />
                                                        </Link>
                                                    </div>
                                                    <div className="flights-grid-caption padding-20 bg-custom-white p-relative">
                                                        <div className="heading-sec card-footer-sec">
                                                            <div className="left-side">
                                                                <div className="title">
                                                                    <h4 className="fs-16">
                                                                        <Link to={`/booking/${i}`} className="text-custom-black">{item.title}</Link>
                                                                        {getRoute(item.flightroute).map((route, i) => (
                                                                            <span className="text-light-dark" key={i}>{route.title}</span>
                                                                        ))}
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="right-side footer-right">
                                                                <span className="price" style={{ textAlign: 'left', lineHeight: '20px', textTransform: 'none', fontSize: '20px' }}>₦{item.price}<small style={{ fontSize: '15px' }}>Per Person</small></span>
                                                            </div>
                                                        </div>
                                                        <div className="action">
                                                            <Link to={`/booking/${i}`} className="btn-first btn-submit"
                                                            >Book Tour</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )    
                            })}
                        </div>
                        {displayCount < data.length && (
                            <div className='centered-button'>
                                <button
                                    className="btn-first btn-submit"
                                    onClick={() => setDisplayCount(displayCount + 9)}
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Recomflights;