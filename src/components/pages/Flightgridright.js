import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Partners from '../layouts/Partners';
import Content from '../sections/flight-grid-right/Content';

const pagelocation = "Flight Grid";

class Flightgridright extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Toor - Travel Booking - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content />
                <Partners />
                <Footer />
            </Fragment>
        );
    }
}

export default Flightgridright;