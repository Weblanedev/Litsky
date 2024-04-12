import React, { Component } from 'react';
import whyus from "../../../data/whyus.json";

class Whyus extends Component {
    render() {
        return (
            <div className="why-choose-box mb-md-80">
                <div className="section-header">
                    <div className="section-heading">
                        <h3 className="text-custom-black">Why Choose Us</h3>
                        <div className="section-description">
                            <p className="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                </div>
                <div className="why-choose-wrapper">
                    <div className="why-choose-img p-relative">
                        <div className="row clearfix">
                            {/* Data */}
                            {whyus.map((item, i) => (
                                <div className="col-6" key={i}>
                                    <div className="choose-item animate-img">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} className="full-width" />
                                        <div className="text-wrapper">
                                            <h6 className="text-custom-white">{item.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Data */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Whyus;