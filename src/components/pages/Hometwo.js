import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Partners from '../layouts/Partners';
import Content from '../sections/home-two/Content';

const pagelocation = "Homepage";

class Hometwo extends Component {
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
                <Content />
                <Partners />
                <Footer />
            </Fragment>
        );
    }
}

export default Hometwo;