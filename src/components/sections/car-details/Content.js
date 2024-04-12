import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Tab, Nav } from "react-bootstrap";
import { getCar, getAgents, getAmenities, getCarByCategory, getCartype } from '../../../helper/carHelper';
import { getAuthor, getTestimonials } from '../../../helper/helper';

const settingsTesti = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    arrows: false,
    dots: false,
    cssEase: 'linear',
};

class Content extends Component {
    render() {
        const detailId = this.props.detailId;
        const item = getCar(detailId);
        return (
            <section className="section-padding bg-light-white listing-details">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="listing-details-inner bx-wrapper bg-custom-white padding-20">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="detail-slider-for mb-xl-20 magnific-gallery">
                                            <div className="slide-item">
                                                <a rel={"external"} href={process.env.PUBLIC_URL + "/" + item.image} className="popup">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt={item.title} />
                                                </a>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="listing-meta-sec mb-md-80">
                                            <div className="tabs">
                                                <Tab.Container defaultActiveKey="tab1">
                                                    <Nav as="ul" varient="tabs" className="custom-flex nav nav-tabs mb-xl-20">
                                                        <Nav.Item as="li">
                                                            <Nav.Link eventKey="tab1">Overview</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item as="li">
                                                            <Nav.Link eventKey="tab2">Amenities</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="tab1">
                                                            <div className="tab-inner">
                                                                <div className="row">
                                                                    <div className="col-md-5">
                                                                        <div className="hotel-type mb-xl-20 bg-light-white padding-10">
                                                                            <ul className="custom">
                                                                                {getAgents(item.agents).map((agent, i) => (
                                                                                    <li className="text-light-dark" key={i}>
                                                                                        <label className="no-margin text-custom-blue">Rental
                                                                                            Company:</label>{agent.title}
                                                                                    </li>
                                                                                ))}
                                                                                {getCartype(item.type).map((type, i) => (
                                                                                    <li className="text-light-dark" key={i}>
                                                                                        <label className="no-margin text-custom-blue">Car
                                                                                            Type</label>{type.title}
                                                                                    </li>
                                                                                ))}
                                                                                <li className="text-light-dark"><label className="no-margin text-custom-blue">Car
                                                                                    Name</label>{item.title}</li>
                                                                                {item.overview.carinfo.map((carinfo, i) => (
                                                                                    <li className="text-light-dark" key={i}>
                                                                                        <label className="no-margin text-custom-blue">{carinfo.title}:</label>{carinfo.text}
                                                                                    </li>
                                                                                ))}
                                                                                <li className="text-light-dark">
                                                                                    <label className="no-margin text-custom-blue">
                                                                                        Base Fare:
                                                                                    </label>${new Intl.NumberFormat().format((item.price).toFixed(0))}
                                                                                </li>
                                                                                <li className="text-light-dark">
                                                                                    <label className="no-margin text-custom-blue">
                                                                                        Tax &amp; Fees:
                                                                                    </label>$30.00
                                                                                </li>
                                                                                <li className="text-light-dark">
                                                                                    <label className="no-margin text-custom-blue">
                                                                                        Total Price:
                                                                                    </label>${new Intl.NumberFormat().format((item.price + 30).toFixed(2))}
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-7">
                                                                        <div className="listing-testimonial padding-20 bg-light-white mb-xl-20">
                                                                            <Slider {...settingsTesti} className="testimonial-inner detail-testimonial">
                                                                                {/* Data */}
                                                                                {getTestimonials(item.overview.testimonials).map((testimonials, i) => (
                                                                                    <div key={i} className="tesimonial-item">
                                                                                        <cite className="text-custom-blue fs-16">{testimonials.text.slice(0, 152)}</cite>
                                                                                        {getAuthor(testimonials.author).map((author, i) => (
                                                                                            <div className="testimonial-author" key={i}>
                                                                                                <div className="author-img">
                                                                                                    <img src={process.env.PUBLIC_URL + "/" + author.image} className="rounded-circle" alt={author.name} />
                                                                                                </div>
                                                                                                <div className="author-name ml-2">
                                                                                                    <h6 className="text-custom-black no-margin fs-14 fw-500">
                                                                                                        {author.name}</h6>
                                                                                                    <p className="no-margin text-light-dark">
                                                                                                        {author.post}</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                ))}
                                                                                {/* Data */}
                                                                            </Slider>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className="information">
                                                                            {getAgents(item.agents).map((agent, i) => (
                                                                                <h4 className="text-custom-black" key={i}>About
                                                                                    {agent.title}</h4>
                                                                            ))}
                                                                            <div className="htmltext" dangerouslySetInnerHTML={{ __html: item.overview.text }}>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="tab2">
                                                            <h4 className="text-custom-black">{item.includes.title}</h4>
                                                            <p className="text-light-dark">{item.includes.text}</p>
                                                            <ul className="custom amenities row no-gutters mb-xl-20">
                                                                {/* Data */}
                                                                {getAmenities(item.includes.amenties).map((amenities, i) => (
                                                                    <li className="col-sm-6" key={i}>
                                                                        <div className="icon-box text-light-dark">
                                                                            <i className={amenities.icon} />
                                                                            {amenities.title}
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                                {/* Data */}
                                                            </ul>
                                                            <h4 className="text-custom-black">{item.travelinfo.title}</h4>
                                                            <p className="text-light-dark">{item.travelinfo.text}</p>
                                                            {item.travelinfo.journeydetails.map((time, i) => (
                                                                <div className="travel-info bg-light-white" key={i}>
                                                                    <div className="row no-gutters">
                                                                        <div className="col-sm-6">
                                                                            <div className="head padding-20">
                                                                                <h5 className="text-custom-black fs-14 fw-500 no-margin">
                                                                                    Pick-up location details</h5>
                                                                                <span className="text-light-dark fs-12">Phone: (+247) 123
                                                                                    456 7890</span>
                                                                            </div>
                                                                            <div className="travel-info-body padding-20">
                                                                                <div className="date-wrapper mb-xl-20">
                                                                                    <div className="icon text-custom-blue fs-20">
                                                                                        <i className="far fa-clock" />
                                                                                    </div>
                                                                                    <div className="text">
                                                                                        <p className="text-custom-black no-margin">Pickup
                                                                                            Time</p>
                                                                                        <span className="text-light-dark fs-12">{time.pickuptime}</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="date-wrapper">
                                                                                    <div className="icon text-custom-blue fs-20">
                                                                                        <i className="fas fa-map-marker-alt" />
                                                                                    </div>
                                                                                    <div className="text">
                                                                                        <p className="text-custom-black no-margin">Location
                                                                                        </p>
                                                                                        <span className="text-light-dark fs-12">{time.pickuplocation}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="head padding-20">
                                                                                <h5 className="text-custom-black fs-14 fw-500 no-margin">
                                                                                    Drop-off location details</h5>
                                                                                <span className="text-light-dark fs-12">Phone: (+247) 123
                                                                                    456 7890</span>
                                                                            </div>
                                                                            <div className="travel-info-body padding-20">
                                                                                <div className="date-wrapper mb-xl-20">
                                                                                    <div className="icon text-custom-blue fs-20">
                                                                                        <i className="far fa-clock" />
                                                                                    </div>
                                                                                    <div className="text">
                                                                                        <p className="text-custom-black no-margin">Drop Off
                                                                                            Time</p>
                                                                                        <span className="text-light-dark fs-12">{time.droptime}</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="date-wrapper">
                                                                                    <div className="icon text-custom-blue fs-20">
                                                                                        <i className="fas fa-map-marker-alt" />
                                                                                    </div>
                                                                                    <div className="text">
                                                                                        <p className="text-custom-black no-margin">Location
                                                                                        </p>
                                                                                        <span className="text-light-dark fs-12">{time.droplocation}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Tab.Container>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="quick-quote bx-wrapper padding-20 mb-xl-30">
                                                    <h5 className="text-custom-black">Enquiry Now</h5>
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Pick Up</label>
                                                                    <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Pick Up
                                                                        Date/Time</label>
                                                                    <div className="input-group group-form">
                                                                        <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                        <span className="input-group-append">
                                                                            <i className="far fa-calendar" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Drop Off</label>
                                                                    <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Drop Off
                                                                        Date/Time</label>
                                                                    <div className="input-group group-form">
                                                                        <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                        <span className="input-group-append">
                                                                            <i className="far fa-calendar" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Car Type</label>
                                                                    <div className="group-form">
                                                                        <div className="nice-select custom-select form-control form-control-custom">
                                                                            <select >
                                                                                <option>Economy</option>
                                                                                <option>Compact</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button type="submit" className="btn-first btn-submit full-width btn-height">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                {getCarByCategory(item.category, detailId).slice(0, 1).map((car, i) => (
                                                    <div className="hotel-grid mb-xl-30" key={i}>
                                                        <div className="hotel-grid-wrapper car-grid bx-wrapper">
                                                            <div className="image-sec animate-img">
                                                                <Link to={"/car-details/" + car.id}>
                                                                    <img src={process.env.PUBLIC_URL + "/" + car.image} className="full-width" alt={car.title} />
                                                                </Link>
                                                            </div>
                                                            <div className="hotel-grid-caption padding-20 bg-custom-white p-relative">
                                                                <h4 className="title fs-16"><Link to={"/car-details/" + car.id} className="text-custom-black">{car.title}<small className="text-light-dark">Per
                                                                    day</small></Link></h4>
                                                                <span className="price"><small>From</small>${new Intl.NumberFormat().format((car.price).toFixed(0))}</span>
                                                                <div className="action">
                                                                    <Link to={"/car-details/" + car.id} className="btn-second btn-small">View</Link>
                                                                    <Link to="/booking" className="btn-first btn-submit yellow">Book</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="need-help bx-wrapper padding-20">
                                                    <h5 className="text-custom-black">Need Help?.</h5>
                                                    <p className="text-light-dark">We would be more than happy to help you. Our team
                                                        advisor are 24/7 at your service to help you.</p>
                                                    <ul className="custom">
                                                        <li className="text-custom-blue fs-18">
                                                            <i className="fas fa-phone-alt" />
                                                            <Link to="#" className="text-light-dark">(+347) 123 456 7890</Link>
                                                        </li>
                                                        <li className="text-custom-blue fs-18">
                                                            <i className="fas fa-envelope" />
                                                            <Link to="#" className="text-light-dark fs-14">example@example.com</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;