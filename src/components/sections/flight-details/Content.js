import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Tab, Nav, Accordion, Card, Button } from "react-bootstrap";
import { getFlight, getAirlines, getAmenities, getType } from '../../../helper/flightHelper';
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
        const item = getFlight(detailId);
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
                                                        <Nav.Item as="li">
                                                            <Nav.Link eventKey="tab3">FAQs</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="tab1">
                                                            <div className="tab-inner">
                                                                <div className="row">
                                                                    <div className="col-md-5">
                                                                        <div className="hotel-type mb-xl-20 bg-light-white padding-10">
                                                                            <ul className="custom">
                                                                                {getAirlines(item.airlines).map((airlines, i) => (
                                                                                    <li className="text-light-dark" key={i}>
                                                                                        <label className="no-margin text-custom-blue">
                                                                                            Airline:
                                                                                        </label>{airlines.title}
                                                                                    </li>
                                                                                ))}
                                                                                {getType(item.flighttype).map((flighttype, i) => (
                                                                                    <li className="text-light-dark" key={i}>
                                                                                        <label className="no-margin text-custom-blue">
                                                                                            Flight Type:
                                                                                        </label>{flighttype.title}
                                                                                    </li>
                                                                                ))}
                                                                                {item.overview.flightinfo.map((flightinfo, i) => (
                                                                                    <li className="text-light-dark" key={i}>
                                                                                        <label className="no-margin text-custom-blue">{flightinfo.title}:</label>{flightinfo.text}
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
                                                                                    </label>$300.00
                                                                                </li>
                                                                                <li className="text-light-dark">
                                                                                    <label className="no-margin text-custom-blue">
                                                                                        Total Price:
                                                                                    </label>${new Intl.NumberFormat().format((item.price + 300).toFixed(2))}
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
                                                                                        <cite className="text-custom-blue fs-16">{testimonials.text.slice(0, 125)}</cite>
                                                                                        {getAuthor(testimonials.author).map((author, i) => (
                                                                                            <div className="testimonial-author" key={i}>
                                                                                                {/* <div className="author-img">
                                                                                                    <img src={process.env.PUBLIC_URL + "/" + author.image} className="rounded-circle" alt={author.name} />
                                                                                                </div> */}
                                                                                                <div className="author-name ml-2">
                                                                                                    <h6 className="text-custom-black no-margin fs-14 fw-500">
                                                                                                        {author.name}</h6>
                                                                                                    {/* <p className="no-margin text-light-dark">
                                                                                                        {author.post}</p> */}
                                                                                                </div>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                ))}
                                                                                {/* Data */}
                                                                            </Slider>
                                                                        </div>
                                                                    </div>
                                                                    {/* <div className="col-12">
                                                                        <div className="information">
                                                                            <h4 className="text-custom-black">About {item.title}</h4>
                                                                            <div className="htmltext" dangerouslySetInnerHTML={{ __html: item.overview.text }} >
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="tab2">
                                                            <h4 className="text-custom-black">{item.includes.title}</h4>
                                                            <p className="text-light-dark">{item.includes.text}</p>
                                                            <ul className="custom amenities row no-gutters mb-xl-20">
                                                                {/* Data */}
                                                                {getAmenities(item.includes.amenities).map((amenities, i) => (
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
                                                            <div className="travel-info bg-light-white">
                                                                <div className="row no-gutters">
                                                                    {/* Data */}
                                                                    {item.travelinfo.journeydetails.map((time, i) => (
                                                                        <div className={item.travelinfo.journeydetails.length === 1 ? 'col-sm-12' : 'col-sm-6'} key={i}>
                                                                            <div className="head padding-20">
                                                                                {getAirlines(item.airlines).map((airlines, i) => (
                                                                                    <h5 className="text-custom-black fs-14 fw-500 no-margin" key={i}>
                                                                                        {airlines.title}</h5>
                                                                                ))}
                                                                                {getType(item.flighttype).map((flighttype, i) => (
                                                                                    <span className="text-light-dark fs-12" key={i}>AI-635
                                                                                        {flighttype.title}</span>
                                                                                ))}
                                                                            </div>
                                                                            <div className="travel-info-body padding-20">
                                                                                <div className="date-wrapper mb-xl-20">
                                                                                    <div className="icon text-custom-blue fs-20">
                                                                                        <i className="far fa-clock" />
                                                                                    </div>
                                                                                    <div className="text">
                                                                                        <p className="text-custom-black no-margin">Take Off
                                                                                        </p>
                                                                                        <span className="text-light-dark fs-12">{time.takeofftime}</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="date-wrapper">
                                                                                    <div className="icon text-custom-blue fs-20">
                                                                                        <i className="fas fa-map-marker-alt" />
                                                                                    </div>
                                                                                    <div className="text">
                                                                                        <p className="text-custom-black no-margin">Landing
                                                                                        </p>
                                                                                        <span className="text-light-dark fs-12">{time.landingtime}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                    {/* Data */}
                                                                </div>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="tab3">
                                                            <Accordion defaultActiveKey={1} className="custom-accordion d-block">
                                                                {item.faqs.map((faq, i) => (
                                                                    <Card key={i}>
                                                                        <Accordion.Collapse eventKey={1 + i} className="collapseparent">
                                                                            <Card.Body>
                                                                                <div dangerouslySetInnerHTML={{ __html: faq.text }} />
                                                                            </Card.Body>
                                                                        </Accordion.Collapse>
                                                                        <Card.Header>
                                                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + i}>
                                                                                {faq.title}
                                                                            </Accordion.Toggle>
                                                                        </Card.Header>
                                                                    </Card>
                                                                ))}
                                                            </Accordion>
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
                                                    <h5 className="text-custom-black">Book Your Travel</h5>
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Leaving
                                                                        From</label>
                                                                    <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Departing
                                                                        On</label>
                                                                    <div className="input-group group-form">
                                                                        <input
                                                                            className='form-control form-control-custom datepickr'
                                                                            placeholder="Select a date"
                                                                            type="date"
                                                                            // value={day}
                                                                            required
                                                                        />
                                                                        {/* <span className="input-group-append">
                                                                            <i className="far fa-calendar" />
                                                                        </span> */}
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Going From</label>
                                                                    <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Arriving
                                                                        On</label>
                                                                    <input
                                                                        className='form-control form-control-custom datepickr'
                                                                        placeholder="Select a date"
                                                                        type="date"
                                                                        // value={day}
                                                                        required
                                                                    />
                                                                    {/* <div className="input-group group-form">
                                                                        <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                        <span className="input-group-append">
                                                                            <i className="far fa-calendar" />
                                                                        </span>
                                                                    </div> */}
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Class</label>
                                                                    <div className="group-form">
                                                                        <div className="nice-select custom-select form-control form-control-custom">
                                                                            <select >
                                                                                <option>Business</option>
                                                                                <option>Economy</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Link to="/booking">
                                                                <button type="submit" className="btn-first btn-submit full-width btn-height">Book Now</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                               
                                                <div className="need-help bx-wrapper padding-20">
                                                    <h5 className="text-custom-black">Need Help?.</h5>
                                                    <p className="text-light-dark">We would be more than happy to help you. Our team
                                                        advisor are 24/7 at your service to help you.</p>
                                                    <ul className="custom">
                                                        <li className="text-custom-blue fs-18">
                                                            <i className="fas fa-phone-alt" />
                                                            <Link to="#" className="text-light-dark">(+01) 000 000 0000</Link>
                                                        </li>
                                                        <li className="text-custom-blue fs-18">
                                                            <i className="fas fa-envelope" />
                                                            <Link to="#" className="text-light-dark fs-14">Parceltube@gmail.com</Link>
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