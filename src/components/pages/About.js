import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Footer from '../layouts/Footer';
import Content from '../sections/about/Content';

const pagelocation = "About Us";
class About extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Parceltube - Tour Booking  | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                {/* <Header /> */}
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default About;