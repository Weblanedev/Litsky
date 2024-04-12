import React, { Component } from 'react';
import { Tab, Nav } from "react-bootstrap";

class Searchform extends Component {
    render() {
        return (
            <div className="banner-tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs">
                                <Tab.Container defaultActiveKey="tab1">
                                    <Nav as="ul" varient="tabs" className="custom-flex nav nav-tabs">
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="tab1">Hotel</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="tab2">Flights</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="tab3">Cruise</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="tab4">Cars</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content className="bg-custom-white bx-wrapper padding-20">
                                        <Tab.Pane eventKey="tab1">
                                            <div className="tab-inner">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6">
                                                            <div className="form-group">
                                                                <label className="fs-14 text-custom-black fw-500">Your Destination</label>
                                                                <input type="text" name="#" className="form-control form-control-custom" placeholder="Your Destination and Hotel Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Check In</label>
                                                                        <div className="input-group group-form">
                                                                            <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                            <span className="input-group-append">
                                                                                <i className="far fa-calendar" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Check Out</label>
                                                                        <div className="input-group group-form">
                                                                            <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                            <span className="input-group-append">
                                                                                <i className="far fa-calendar" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Rooms</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>01</option>
                                                                                    <option>02</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Adults</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>01</option>
                                                                                    <option>02</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Kids</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>01</option>
                                                                                    <option>02</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-2 col-md-6">
                                                            <label className="submit" />
                                                            <button type="submit" className="btn-first btn-submit full-width btn-height">Search Now</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab2">
                                            <div className="tab-inner">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="form-group">
                                                                <label className="fs-14 text-custom-black fw-500">Leaving From</label>
                                                                <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="fs-14 text-custom-black fw-500">Going From</label>
                                                                <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Departing On</label>
                                                                        <div className="input-group group-form">
                                                                            <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                            <span className="input-group-append">
                                                                                <i className="far fa-calendar" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="submit" />
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>Anytime</option>
                                                                                    <option>Morning</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Arriving On</label>
                                                                        <div className="input-group group-form">
                                                                            <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                            <span className="input-group-append">
                                                                                <i className="far fa-calendar" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="submit" />
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>Anytime</option>
                                                                                    <option>Morning</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12">
                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Adults</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>01</option>
                                                                                    <option>02</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-3">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Kids</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>01</option>
                                                                                    <option>02</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Promocode</label>
                                                                        <input type="text" name="#" className="form-control form-control-custom" placeholder="type here" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Infants</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>01</option>
                                                                                    <option>02</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="submit" />
                                                                        <button className="btn-first btn-submit full-width btn-height">Search</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab3">
                                            <div className="tab-inner">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="form-group">
                                                                <label className="fs-14 text-custom-black fw-500">Your Destination</label>
                                                                <input type="text" name="#" className="form-control form-control-custom" placeholder="enter a destination or hotel name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Departure Date</label>
                                                                        <div className="input-group group-form">
                                                                            <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                            <span className="input-group-append">
                                                                                <i className="far fa-calendar" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Cruise Length</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>1-2 Nights</option>
                                                                                    <option>3-4 Nights</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Cruise Line</label>
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
                                                                </div>
                                                                <div className="col-6">
                                                                    <label className="submit" />
                                                                    <button type="submit" className="btn-first btn-submit full-width btn-height">Search Now</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab4">
                                            <div className="tab-inner">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="form-group">
                                                                <label className="fs-14 text-custom-black fw-500">Pick Up</label>
                                                                <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="fs-14 text-custom-black fw-500">Drop Off</label>
                                                                <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Pick Up Date/Time</label>
                                                                        <div className="input-group group-form">
                                                                            <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                            <span className="input-group-append">
                                                                                <i className="far fa-calendar" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="submit" />
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>Anytime</option>
                                                                                    <option>Morning</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Drop Off Date/Time</label>
                                                                        <div className="input-group group-form">
                                                                            <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                            <span className="input-group-append">
                                                                                <i className="far fa-calendar" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="submit" />
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>Anytime</option>
                                                                                    <option>Morning</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12">
                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Adults</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>01</option>
                                                                                    <option>02</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-3">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Kids</label>
                                                                        <div className="group-form">
                                                                            <div className="nice-select custom-select form-control form-control-custom">
                                                                                <select >
                                                                                    <option>01</option>
                                                                                    <option>02</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="fs-14 text-custom-black fw-500">Promocode</label>
                                                                        <input type="text" name="#" className="form-control form-control-custom" placeholder="type here" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
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
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label className="submit" />
                                                                        <button className="btn-first btn-submit full-width btn-height">Search</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Searchform;