import React, { useEffect } from 'react';
import { formatNumber } from "../../../utils";
import { Link } from 'react-router-dom';
import { CurrencyState } from '../../../Context/CurrencyContext';


export default function Contactform() {

    const flightDetails = localStorage.getItem('flightDetails');
    const bookingDetails = localStorage.getItem('values');

    const data = JSON.parse(flightDetails)
    const bookingData = JSON.parse(bookingDetails)

    const { price, title, airlines, flightdate } = data || {}
    const { name, email, phone, date, selectOption } = bookingData || {}

    console.log(selectOption)

    const {
        state: { currency, rate }
    } = CurrencyState()

    const amount = currency !== '$' ? price * rate : price

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.flutterwave.com/v3.js";
        document.getElementsByTagName("head")[ 0 ].appendChild(script);
    }, []);


    const handlePaymentGateway = () => {
        return window.FlutterwaveCheckout({
            public_key: "FLWPUBK-00f1a8bfd678ad383f650cd6cccd643b-X",
            amount: amount,
            currency: localStorage.getItem('currency') || 'USD',
            tx_ref: new Date().toISOString(),
            customer: {
                email: (email),
                // email: localStorage.getItem("email"),
            },
            customizations: {
                title: "PARCELTUBE",
            },
            callback: async function () {
                alert('Payment successful...We will reach out to you for further details')
            },
        });
    }

    return (
        <>
            <div className='tab-inner'>
                <div className="section-padding contact-form-map row">
                    <div className="container flight_review col-lg-8">
                        <div className="row review_cont" style={{ display: 'block' }}>
                            <div className="col-lg-7" style={{ maxWidth: '100%' }}>
                                <div className="section-header">
                                    <div className="section-heading">
                                        <h5 className="text-custom-black"> Information Review page</h5>
                                        <div className="section-description">
                                            <p className="text-light-dark">Kindly confirm the information on this page, ensure they are correct before you proceed with this booking </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='tab-inner'>
                                    <div className='row' style={{ display: 'block' }}>
                                        <div className="col-lg-8" style={{ maxWidth: '100%' }}>
                                            <div className="need-help bx-wrapper padding-20">
                                                <h5 className="text-custom-black">Booking Information</h5>
                                                
                                                <li className="text-light-dark form_list"> <strong>Tour: </strong> <Link>{title}</Link> </li>
                                                
                                                <li className="text-light-dark form_list"> <strong>City: </strong> <Link>{airlines}</Link> </li>
                                                <li className="text-light-dark form_list" > <strong>Amount due: </strong> <Link>{currency}{currency !== '$' ? formatNumber(price * rate) : formatNumber(price)}</Link> </li>
                                                <li className="text-light-dark form_list"> <strong>Customer Name: </strong> <Link>{name}</Link> </li>
                                                <li className="text-light-dark form_list" > <strong>Email: </strong> <Link>{email}</Link> </li>
                                                <li className="text-light-dark form_list" > <strong>Phone Number: </strong> <Link>{phone}</Link> </li>
                                                <li className="text-light-dark form_list" > <strong>Booking Date: </strong> <Link>{flightdate}</Link> </li>
                                                <li className="text-light-dark form_list" > <strong>Departure Date: </strong> <Link>{date}</Link> </li>
                                                {/* <li className="text-light-dark form_list" > <strong>Booking Type: </strong> <Link>{selectOption}</Link> </li> */}
                                                <hr className="mt-0" />
                                                <h5 className="text-custom-black">Need More Help?.</h5>
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
                                    </div>

                                </div>
                                <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="col-md-8" style={{ maxWidth: '50%',  marginTop:'15px' }}>
                                        <i className="fas fa-calendar text-gray" />
                                        {/* <i className="fas fa-plane text-gray" /> */}
                                        <Link to="/" className="text-light-dark fs-14"
                                        > Go back to booking instead</Link>
                                    </div>
                                    <div className="col-md-8"  style={{ maxWidth: '50%', textAlign:'center' }}>
                                        <div className="">
                                            <hr className="mt-0" />
                                            <Link type="submit" className="btn-first btn-submit rounded full-width btn-height"
                                                onClick={handlePaymentGateway}
                                            >Book This Tour</Link>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-8"  style={{ maxWidth: '50%', textAlign:'center' }}>
                                        <i className="fas fa-plane text-gray" />
                                            <Link to="/" className="text-light-dark fs-14"
                                            >Go back instead</Link>
                                    </div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
