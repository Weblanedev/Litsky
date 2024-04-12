import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Tab, Nav, Accordion, Card, Button } from "react-bootstrap";
import { getHotel, getHotelByCategory, getAccomodation, getAmenities } from '../../../helper/hotelHelper';
import { getAuthor, getTestimonials, Rating } from '../../../helper/helper';

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    cssEase: 'linear'
};
const settingsThumb = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [{
        breakpoint: 576,
        settings: {
            slidesToShow: 3
        }
    }]
};
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
    constructor(props) {
        super(props)
        this.state = {
            nav1: null,
            nav2: null
        }
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        const detailId = this.props.detailId;
        const item = getHotel(detailId);
        return (
            <section className="section-padding bg-light-white listing-details">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="listing-details-inner bx-wrapper bg-custom-white padding-20">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <Slider {...settings} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="detail-slider-for mb-xl-20 magnific-gallery">
                                            {/* Data */}
                                            {item.image.map((image, i) => (
                                                <div key={i} className="slide-item">
                                                    <a rel={"external"} href={process.env.PUBLIC_URL + "/" + image} className="popup">
                                                        <img src={process.env.PUBLIC_URL + "/" + image} className="image-fit" alt={item.title} />
                                                    </a>
                                                </div>
                                            ))}
                                            {/* Data */}
                                        </Slider>
                                        <Slider {...settingsThumb} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} className="detail-slider-nav row">
                                            {/* Data */}
                                            {item.image.map((image, i) => (
                                                <div key={i} className="slide-item col-12">
                                                    <img src={process.env.PUBLIC_URL + "/" + image} className="image-fit" alt={item.title} />
                                                </div>
                                            ))}
                                            {/* Data */}
                                        </Slider>
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
                                                                                <li className="text-light-dark"><label className="no-margin text-custom-blue">hotel
                                                                                    type:</label>{item.rating} star</li>
                                                                                {item.overview.hotelinfo.map((hotelinfo, i) => (
                                                                                    <li className="text-light-dark" key={i}>
                                                                                        <label className="no-margin text-custom-blue">{hotelinfo.title}:</label>{hotelinfo.text}
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
                                                                                        <cite className="text-custom-blue fs-16">{testimonials.text.slice(0, 125)}</cite>
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
                                                                            <h4 className="text-custom-black">About {item.title}</h4>
                                                                            <div className="htmltext" dangerouslySetInnerHTML={{ __html: item.overview.text }} />
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
                                                                {/* Data */}
                                                                {/* Data */}
                                                                {getAmenities(item.includes.amenties).map((amenities, i) => (
                                                                    <li className="col-md-4 col-sm-6" key={i}>
                                                                        <div className="icon-box text-light-dark">
                                                                            <i className={amenities.icon} />
                                                                            {amenities.title}
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                                {/* Data */}
                                                            </ul>
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
                                                                    <label className="fs-14 text-custom-black fw-500">Check In</label>
                                                                    <div className="input-group group-form">
                                                                        <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                        <span className="input-group-append">
                                                                            <i className="far fa-calendar" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-black fw-500">Check Out</label>
                                                                    <div className="input-group group-form">
                                                                        <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                        <span className="input-group-append">
                                                                            <i className="far fa-calendar" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <button type="submit" className="btn-first btn-submit full-width btn-height">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                {getHotelByCategory(item.category, detailId).slice(0, 1).map((hotel, i) => (
                                                    <div className="hotel-grid mb-xl-30" key={i}>
                                                        <div className="hotel-grid-wrapper bx-wrapper">
                                                            <div className="image-sec p-relative">
                                                                <Link to={"/hotel-details/" + hotel.id}>
                                                                    <img src={process.env.PUBLIC_URL + "/" + hotel.image[0]} className="full-width" alt={hotel.title} />
                                                                </Link>
                                                            </div>
                                                            <div className="hotel-grid-caption padding-20 bg-custom-white p-relative">
                                                                <h4 className="title fs-16"><Link to={"/hotel-details/" + hotel.id} className="text-custom-black">{hotel.title}<small className="text-light-dark">{hotel.location}</small></Link></h4>
                                                                <span className="price"><small>avg/night</small>${new Intl.NumberFormat().format((hotel.price).toFixed(0))}</span>
                                                                <div className="feedback">
                                                                    <div className="ratings">
                                                                        <div className="rating">
                                                                            {Rating(hotel.rating)}
                                                                        </div>
                                                                    </div>
                                                                    <span className="review fs-12 text-light-dark">{hotel.reviews.length}
                                                                        reviews</span>
                                                                </div>
                                                                <p className="text-light-dark">Nunc cursus libero purus ac congue arcu
                                                                    cursus ut sed vitae pulvinar massa idporta nequetiam.</p>
                                                                <div className="action">
                                                                    <Link to={"/hotel-details/" + hotel.id} className="btn-second btn-small">View</Link>
                                                                    <Link to="/booking" className="btn-first btn-submit">Book</Link>
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