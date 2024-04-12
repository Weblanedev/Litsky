import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Content from '../sections/booking/Content';

const pagelocation = "Booking";

class Booking extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title> Travel Booking {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content />
                {/* <Partners /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default Booking;