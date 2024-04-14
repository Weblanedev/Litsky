import React, { useEffect, useState } from 'react';
import { formatNumber } from "../../../utils";
import { Link } from 'react-router-dom';
import { CurrencyState } from '../../../Context/CurrencyContext';


const PaymentModal = ({ setModalShowing, onSubmit }) => {
    const flightDetails = localStorage.getItem('flightDetails');
    const bookingDetails = localStorage.getItem('values');

    const data = JSON.parse(flightDetails)
    const bookingData = JSON.parse(bookingDetails)

    const { price, title, airlines, flightdate } = data || {}
    const { name, email, phone, date, selectOption } = bookingData || {}
    const [mobilePage, setMobilePage] = useState("reviewInformation")

    console.log(selectOption)

    const {
        state: { currency, rate }
    } = CurrencyState()

    const amount = currency !== '$' ? price * rate : price

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.flutterwave.com/v3.js";
        document.getElementsByTagName("head")[0].appendChild(script);
    }, []);

    return (
        <div className="payment-modal-container">
            <div onClick={() => setModalShowing(false)} className='close-modal-button'>
                <img src="/assets/images/icon-close.svg" />
            </div>
            <div className="payment-modal container">
                <div className="review-information">
                    <h1 className={`review-information-title ${mobilePage == 'cardDetails' ? 'mobile-hidden' : ''}`}>
                        Payment
                    </h1>
                    <p className="review-information-intro-text">Kindly confirm that the booking information below is correct before proceeding to payment.</p>
                    <div className="review-information__details">
                        <li className="text-light-dark form_list"> <strong>Tour: </strong> <span>{title}</span> </li>
                        <li className="text-light-dark form_list"> <strong>City: </strong> <span>{airlines}</span> </li>
                        <li className="text-light-dark form_list"> <strong>Customer Name: </strong> <span>{name}</span> </li>
                        <li className="text-light-dark form_list" > <strong>Email: </strong> <span>{email}</span> </li>
                        <li className="text-light-dark form_list" > <strong>Phone Number: </strong> <span>{phone}</span> </li>
                        <li className="text-light-dark form_list" > <strong>Booking Date: </strong> <span>{flightdate}</span> </li>
                        <li className="text-light-dark form_list" > <strong>Departure Date: </strong> <span>{date}</span> </li>
                        <hr />
                        <li className="text-light-dark  final-price form_list" > <strong>Amount due: </strong> <span>{currency}{currency !== '$' ? formatNumber(price * rate) : formatNumber(price)}</span> </li>
                    </div>
                </div>

                <div className="card-details">
                    <h1 className={`card-details-title ${mobilePage == 'reviewInformation' ? 'mobile-hidden' : ''}`}>
                        Card Details
                    </h1>
                    <form onSubmit={onSubmit} className='payment-form'>
                        <div className='form-input-group'>
                            <p className='form-input-group__title'>Cardholder's Name</p>
                            <input />
                        </div>
                        <div className='form-input-group'>
                            <p className='form-input-group__title'>Card Number</p>
                            <input />
                        </div>
                        <div className='form-input-row seventy_thirty'>
                            <div className='form-input-group'>
                                <p className='form-input-group__title'>Expiry Date</p>
                                <input type="date" />
                            </div>
                            <div className='form-input-group'>
                                <p className='form-input-group__title'>CVC/CVV</p>
                                <input type="text" maxLength={3} />
                            </div>
                        </div>
                        <button onClick className='submit-button' type='submit'>
                            Pay Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PaymentModal;