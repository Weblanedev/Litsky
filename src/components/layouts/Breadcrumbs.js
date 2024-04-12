import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
    render() {
        return (
            <div className="subheader normal-bg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-custom-white">{this.props.breadcrumb.pagename}</h1>
                            <ul className="custom-flex justify-content-center">
                                <li className="fw-500">
                                    <Link to="/" className="text-custom-white">Home</Link>
                                </li>
                                <li className="active fw-500">
                                    {this.props.breadcrumb.pagename}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumbs;