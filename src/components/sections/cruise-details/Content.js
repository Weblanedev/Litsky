import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Tab, Nav } from "react-bootstrap";
import { getCruise, getAccomodation, getAmenities, getCruiselin } from '../../../helper/cruiseHelper';
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
        const item = getCruise(detailId);
        return (
            <section className="section-padding bg-light-white listing-details">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="listing-details-inner bx-wrapper bg-custom-white padding-20">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="detail-slider-for magnific-gallery">
                                            <div className="slide-item">
                                                <img src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt={item.title} />
                                            </div>
                                        </div>
                                        <hr className="mt-0" />
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
                                                            <Nav.Link eventKey="tab3">Itinerary</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="tab1">
                                                            <div className="tab-inner">
                                                                <div className="row">
                                                                    <div className="col-md-5">
                                                                        <div className="hotel-type mb-xl-20 bg-light-white padding-10">
                                                                            <ul className="custom">
                                                                                {getCruiselin(item.cruiseline).map((line, i) => (
                                                                                    <li className="text-light-dark" key={i}>
                                                                                        <label className="no-margin text-custom-blue">
                                                                                            Cruise Name:
                                                                                        </label>{line.title}
                                                                                    </li>
                                                                                ))}
                                                                                <li className="text-light-dark">
                                                                                    <label className="no-margin text-custom-blue">
                                                                                        Cruise Length:
                                                                                    </label>{item.night} Nights
                                                                                </li>
                                                                                {item.overview.cruiseinfo.map((cruiseinfo, i) => (
                                                                                    <li className="text-light-dark" key={i}>
                                                                                        <label className="no-margin text-custom-blue">{cruiseinfo.title}:</label>{cruiseinfo.text}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-7">
                                                                        <div className="listing-testimonial padding-20 bg-light-white mb-xl-20">
                                                                            <Slider {...settingsTesti} className="testimonial-inner detail-testimonial">
                                                                                {/* Data */}
                                                                                {getTestimonials(item.overview.testimonials).map((testimonials, i) => (
                                                                                    <div key={i} className="tesimonial-item">
                                                                                        <cite className="text-custom-blue fs-16">{testimonials.text.slice(0, 135)}</cite>
                                                                                        {getAuthor(testimonials.author).map((author, i) => (
                                                                                            <div className="testimonial-author" key={i}>
                                                                                               
                                                                                                <div className="author-name ml-2">
                                                                                                    <h6 className="text-custom-black no-margin fs-14 fw-500">
                                                                                                        {author.name}</h6>
                                                                                                   
                                                                                                </div>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                ))}
                                                                                {/* Data */}
                                                                            </Slider>
                                                                        </div>
                                                                    </div>
                                                                   
                                                                </div>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="tab2">
                                                            <h4 className="text-custom-black">{item.includes.title}</h4>
                                                            <p className="text-light-dark">{item.includes.text}</p>
                                                            <ul className="custom amenities row no-gutters">
                                                                {/* Data */}
                                                                {getAccomodation(item.includes.accomodation).map((accomodation, i) => (
                                                                    <li className="col-md-4 col-sm-6" key={i}>
                                                                        <div className="icon-box text-light-dark">
                                                                            <i className={accomodation.icon} />
                                                                            {accomodation.title}
                                                                        </div>
                                                                    </li>
                                                                ))}

                                                              
                                                                {getAmenities(item.includes.amenties).map((amenities, i) => (
                                                                    <li className="col-md-4 col-sm-6" key={i}>
                                                                        <div className="icon-box text-light-dark">
                                                                            <i className={amenities.icon} />
                                                                            {amenities.title}
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                              
                                                            </ul>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="tab3">
                                                            <div className="tab-inner">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <div className="listing-testimonial padding-20 bg-light-white">
                                                                            <h4 className="text-custom-black">Cruise Itinerary</h4>
                                                                            <table className="itinerary-table mb-xl-20">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Day</th>
                                                                                        <th>Ports of Call</th>
                                                                                        <th>Arrival</th>
                                                                                        <th>Departure</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    {/* Data */}
                                                                                    {item.itinerary.map((itinerary, i) => (
                                                                                        <tr key={i}>
                                                                                            <td>{itinerary.serial}</td>
                                                                                            <td>{itinerary.poc}</td>
                                                                                            <td>{itinerary.arrival}</td>
                                                                                            <td>{itinerary.departure}</td>
                                                                                        </tr>
                                                                                    ))}
                                                                                    {/* Data */}
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
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
                                                                    <label className="fs-14 text-custom-black fw-500">Your
                                                                        Destination</label>
                                                                    <input type="text" name="#" className="form-control form-control-custom" placeholder="Your Destination and Hotel Name" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Departure
                                                                        Date</label>
                                                                    <div className="input-group group-form">
                                                                        <input
                                                                            className='form-control form-control-custom datepickr'
                                                                            placeholder="Select a date"
                                                                            type="date"
                                                                            // value={day}
                                                                            required
                                                                        />
                                                                        {/* <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                        <span className="input-group-append">
                                                                            <i className="far fa-calendar" />
                                                                        </span> */}
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Cruise
                                                                        Length</label>
                                                                    <div className="group-form">
                                                                        <div className="nice-select custom-select form-control form-control-custom">
                                                                            <select >
                                                                                <option>1-2 Nights</option>
                                                                                <option>3-4 Nights</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Cruise
                                                                        Line</label>
                                                                    <div className="group-form">
                                                                        <div className="nice-select custom-select form-control form-control-custom">
                                                                            <select >
                                                                                <option>Azamara Club Cruises</option>
                                                                                <option>Carnival Cruise Lines</option>
                                                                                <option>Celebrity Cruises</option>
                                                                                <option>Costa Cruise Lines</option>
                                                                                <option>Cruise &amp; Maritime Voyages</option>
                                                                                <option>Crystal Cruises</option>
                                                                                <option>Cunard Line Ltd.</option>
                                                                                <option>Disney Cruise Line</option>
                                                                                <option>Holland America Line</option>
                                                                                <option>Hurtigruten Cruise Line</option>
                                                                                <option>MSC Cruises</option>
                                                                                <option>Norwegian Cruise Line</option>
                                                                                <option>Oceania Cruises</option>
                                                                                <option>Orion Expedition Cruises</option>
                                                                                <option>P&amp;O Cruises</option>
                                                                                <option>Paul Gauguin Cruises</option>
                                                                                <option>Peter Deilmann Cruises</option>
                                                                                <option>Princess Cruises</option>
                                                                                <option>Regent Seven Seas Cruises</option>
                                                                                <option>Royal Caribbean International</option>
                                                                                <option>Seabourn Cruise Line</option>
                                                                                <option>Silversea Cruises</option>
                                                                                <option>Star Clippers</option>
                                                                                <option>Swan Hellenic Cruises</option>
                                                                                <option>Thomson Cruises</option>
                                                                                <option>Viking River Cruises</option>
                                                                                <option>Windstar Cruises</option>
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