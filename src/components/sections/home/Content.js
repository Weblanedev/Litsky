import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Recomflights from './Recomflights';


class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Recomflights />
            </Fragment>
        );
    }
}

export default Content;