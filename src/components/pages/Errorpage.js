import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Content from '../sections/error-page/Content';

const pagelocation = "Error 404";

class Errorpage extends Component {
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
                <Content />
            </Fragment>
        );
    }
}

export default Errorpage;