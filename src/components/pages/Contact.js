import React, { Component, Fragment, useState } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Content from '../sections/contact/Content';

const Contact = () => {
    const [successModalShowing, setSuccessModalSHowing] = useState(false)
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    })
    function onSubmit(e) {
        e.preventDefault()
        setSuccessModalSHowing(true)
        setFormValues({
            name: '',
            email: '',
            phoneNumber: '',
            message: ''
        })
    }
    function closeModal() {
        setSuccessModalSHowing(false)
    }
    return (
        <Fragment>
            <MetaTags>
                <title> Contact Us </title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <div className='contact-us-page'>
                <section className='container'>
                    <h1>Get In Touch With Us</h1>
                    <p className='subtext'>Investment, Business, or Enquiries? Let's hear from you!</p>
                </section>
                <section className='contact-us-grid'>
                    <figure>
                        <img className='full-image' src="/assets/images/customer-care.jpeg" />
                    </figure>
                    <form onSubmit={onSubmit} className='contact-us-page-container'>
                        <input onChange={(e) => setFormValues({ ...formValues, name: e.target.values })} value={formValues.name} class="contact-us-input" placeholder='Your Full Name' />
                        <input onChange={(e) => setFormValues({ ...formValues, email: e.target.values })} value={formValues.email} class="contact-us-input" placeholder='Email Address' />
                        <input onChange={(e) => setFormValues({ ...formValues, phoneNumber: e.target.values })} value={formValues.phoneNumber} class="contact-us-input" placeholder='Phone Number' />
                        <textarea onChange={(e) => setFormValues({ ...formValues, message: e.target.values })} value={formValues.message} class="contact-us-input" placeholder='Your Message' />
                        <button type="submit" className='contact-us-button'>Send Mail</button>
                    </form>
                    <div className='contact-us-icon-text-group-container contact-us-page-container'>
                        <div className='contact-us-icon-text-group'>
                            <figure><img src="/assets/images/icon-phone.svg" /></figure>
                            <div><p className='text-group-header'>Call Us</p>
                                <p className='text-group-text'>09092439804</p>
                            </div>
                        </div>
                        <div className='contact-us-icon-text-group'>
                            <figure><img src="/assets/images/icon-mail.svg" /></figure>
                            <div><p className='text-group-header'>Mail Us</p>
                                <p className='text-group-text'>support@litskytravels.com</p>
                            </div>
                        </div>
                        <div className='contact-us-icon-text-group'>
                            <figure><img src="/assets/images/icon-location.svg" /></figure>
                            <div><p className='text-group-header'>Addresss</p>
                                <p className='text-group-text'>
                                    Litskytravels annex building
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {successModalShowing && <div className='success-modal-container'>
                <div className='success-modal'>
                    <img onClick={closeModal} className='close-icon' src='/assets/images/icon-close.svg' />
                    <div></div>
                    <figure>
                        <img src="/assets/images/green-tick.svg" />
                    </figure>
                    <p class="succes-modal-header"> Success</p>
                    <p className='success-modal-text'>
                        Your response has been recorded successfully
                    </p>
                </div>
            </div>}
            <Footer />
        </Fragment>
    );
}

export default Contact;