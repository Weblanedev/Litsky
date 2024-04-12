import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';
// import Maintenance from './Maintenance';


const pagelocation = "Homepage";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Parceltube - Travel Booking | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                {/* <Maintenance /> */}
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Home;