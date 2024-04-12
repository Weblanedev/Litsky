import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { CurrencyState } from '../../../Context/CurrencyContext';
import dataBlock from '../../../data/flights/flight.json'
import { formatNumber } from "../../../utils";
import { useFormik } from 'formik'

function Flightbooking() {

    const history = useHistory()

    const { id } = useParams()
    const flightDetails = dataBlock[ id ]
    const { price, title, airlines, flightdate } = flightDetails
    localStorage.setItem("flightDetails", JSON.stringify(flightDetails))

    console.log(airlines)

    const {
        state: { currency, rate }
    } = CurrencyState()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            selectOption: '',
        },
        onSubmit: values => {
            history.push("/contactform")
            localStorage.setItem("values", JSON.stringify(values))
        },
    });

    return (
        <>
            <div className="tab-inner">
                <div className="row">
                    <div className="col-lg-8">
                        <h5 className="text-custom-black">About this tour:</h5>
                        <p className="text-light-dark" style={{ fontSize: '18px' }}> <strong>Price: </strong> <Link>{currency}{currency !== '$' ? formatNumber(price * rate) : formatNumber(price)}</Link> </p>
                        <p className="text-light-dark" style={{ fontSize: '18px' }}> <strong>Tour: </strong> <Link>{title}</Link> </p>
                        <p className="text-light-dark" style={{ fontSize: '18px' }}> <strong>Booking Date: </strong> <Link>{flightdate}</Link> </p>
                        <p className="text-light-dark" style={{ fontSize: '18px' }}> <strong>Tour Overview: </strong></p>
                        {/* <p className="text-light-dark" style={{ fontSize: '18px' }}> <strong>Time Stamp: </strong> <Link>{timestamp}</Link> </p> */}
                        <div>
                            <div>
                                <p className="text-light-dark"> - Discover the architectural gems of the City from an ideal vantage point on a cruise down the historical places.</p>
                                <p className="text-light-dark"> - The tour is the perfect opportunity to see a huge area of the city without the hassle of taxis and public transit.</p>
                                <p className="text-light-dark">Enjoy unobstructed views of the city’s top attractions, Gain an in-depth understanding of local architecture See the sights of exciting places</p>
                                <p className="text-light-dark"> -  It’s easy to fit the leisurely excursion into your itinerary. </p>
                                <p className="text-light-dark"> -  Indoor and outdoor seating available (indoor is climate controlled)</p>
                                <p className="text-light-dark"> -  Narrated tour on board by professionally trained tour guide.</p>
                            </div>
                        </div>
                        <h5 className="text-custom-black">Disclaimer:</h5>
                        <p className="text-light-dark" style={{ fontSize: '14px' }}> <strong>Please note the fee we charge will only cover to secure a spot for you for this tour, and transport you within the city, all third Party Tour Services are provided by independent travel agents, airlines, hotels, tour operators or other third parties (“Travel Providers”) and are subject to the terms and conditions of those third parties.</strong></p>
                        <div className="col-12">
                        </div>
                        <div className="need-help bx-wrapper padding-20">
                            <h5 className="text-custom-black">Why book flights with Parceltube?</h5>
                            <p className="text-light-dark">Parceltube offers a comprehensive range of services to cater to enssential travel needs. Whether you're looking to explore captivating destinations, embark on thrilling adventures, or indulge in relaxing getaways, we've got you covered. With our extensive network of tour operators and vacation providers, we provide a wide selection of options to suit every traveler's preferences and budget. Our user-friendly platform allows you to easily book tours and vacations, ensuring a seamless and enjoyable booking experience.</p>
                            {/* <p className="text-light-dark">One-stop destination for domestic and international flights</p>
                            <p className="text-light-dark">Easy availability of tickets at competitive prices</p>
                            <p className="text-light-dark">Flawless 24*7 customer support</p> */}
                            <ul className="text-light-dark why-list">
                            </ul>
                            <hr className="mt-0" />

                            <h5 className="text-custom-black">Need Help?.</h5>
                            <p className="text-light-dark">We would be more than happy to help you. Our team advisor are 24/7 at
                                your service to help you.</p>
                            <ul className="custom">
                                <li className="text-custom-blue fs-18">
                                    <i className="fas fa-envelope" />
                                    <Link to="#" className="text-light-dark fs-14"> info@parceltube.ng</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-12">
                                <div className="quick-quote bx-wrapper padding-20 mb-xl-30">
                                    <h5 className="text-custom-black">More Travel Details</h5>

                                    <form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="fs-14 text-custom-black fw-500"  htmlFor="name">Full Name:</label>
                                                    <input
                                                        className="form-control form-control-custom"
                                                        type="text"
                                                        id='name'
                                                        name='name'
                                                        onChange={formik.handleChange}
                                                        value={formik.values.name}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                <label className="fs-14 text-custom-black fw-500"  htmlFor="name">Email:</label>
                                                    <input
                                                        className="form-control form-control-custom"
                                                        type="email"
                                                        id='email'
                                                        name='email'
                                                        onChange={formik.handleChange}
                                                        value={formik.values.email}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <label className="fs-14 text-custom-black fw-500"  htmlFor="name">Phone:</label>
                                        <input
                                            className="form-control form-control-custom"
                                                        type="number"
                                                        id='phone'
                                                        name='phone'
                                                        onChange={formik.handleChange}
                                                        value={formik.values.phone}
                                                        required
                                                    />
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="fs-14 text-custom-black fw-500"  htmlFor="date">Tour Date:</label>
                                                    <input
                                                        className="form-control form-control-custom"
                                                        id="date"
                                                        name="date"
                                                        type="date"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.date}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="fs-14 text-custom-black fw-500"  htmlFor="selectOption">Select Booking type:</label>
                                                    <select
                                                        className="form-control form-control-custom"
                                                        id="selectOption"
                                                        name="selectOption"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.selectOption}
                                                        required
                                                    >
                                                        <option value="">Please choose an option</option>
                                                        <option value="Economy">Economy</option>
                                                        <option value="Business">Business</option>
                                                        <option value="First Class">First Class</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div> */}
                                        <button type="submit" className="btn-first btn-submit rounded full-width btn-height"
                                                >Proceed with booking</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Flightbooking;
