import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import 'magnific-popup';

class Videohelper extends Component {
    componentDidMount() {
        function popup() {
            $('.popup-youtube').magnificPopup({
                type: 'iframe'
            });
        }
        popup();
    }
    render() {
        return (
            <Fragment/>
        );
    }
}

export default Videohelper;