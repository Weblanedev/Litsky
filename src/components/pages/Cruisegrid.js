import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../layouts/Breadcrumbs';
// import Partners from '../layouts/Partners';
import Content from '../sections/cruise-grid/Content';

const pagelocation = "Cruise Grid";

class Cruisegrid extends Component {
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
                <Content
                    minPrice={this.props.match.params.minPrice}
                    maxPrice={this.props.match.params.maxPrice}
                    minNight={this.props.match.params.minNight}
                    maxNight={this.props.match.params.maxNight}
                />
                {/* <Partners /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default Cruisegrid;