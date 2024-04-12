import React, { Component } from 'react';

class Contactinfo extends Component {
    render() {
        return (
            <section className="section-padding bg-light-white contact-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="contact-info-box mb-md-40">
                                <i className="flaticon-placeholder" />
                                <h6 className="text-theme fw-600">13th Street. 47 W 13th St,<br />  New York, NY 10011, USA</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="contact-info-box mb-md-40">
                                <i className="flaticon-telephone-1" />
                                <h6 className="text-theme fw-600"><a rel={"external"} href={"tel:"} className="text-theme">(+347) 123 4567 890</a><br />  Mon-Sat 9:00am-5:00pm</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="contact-info-box">
                                <i className="flaticon-envelope" />
                                <h6 className="text-theme fw-600"><a rel={"external"} href={"mailto:"} className="text-theme">parceltube@gmail.com</a><br />  24 X 7 online support</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contactinfo;