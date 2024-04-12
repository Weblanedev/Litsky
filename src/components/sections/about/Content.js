import React, { Component, Fragment } from 'react';
import Aboutus from './Aboutus';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Aboutus />
                <section className="section-padding why-choose-testimonials">
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Content;