import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import flightblock from '../../../data/flights/flight.json';
import { getRoute } from '../../../helper/flightHelper';
import Sidebar from '../../layouts/Flightsidebar';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: flightblock,
            activePage: 1,
            itemPerpage: 8
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-md-6">
                <div className="flights-grid mb-xl-30">
                    <div className="flights-grid-wrapper bx-wrapper">
                        <div className="image-sec animate-img">
                            <Link to={"/flight-details/" + item.id}>
                                <img src={process.env.PUBLIC_URL + "/" + item.image} className="full-width" alt={item.title} />
                            </Link>
                        </div>
                        <div className="flights-grid-caption padding-20 bg-custom-white p-relative">
                            <div className="heading-sec">
                                <div className="left-side">
                                    <i className="fas fa-plane text-gray" />
                                    <div className="title">
                                        <h4 className="fs-16">
                                            <Link to={"/flight-details/" + item.id} className="text-custom-black">{item.title}</Link>
                                            {getRoute(item.flightroute).map((route, i) => (
                                                <span className="text-light-dark" key={i}>{route.title}
                                                    Flight</span>
                                            ))}
                                        </h4>
                                    </div>
                                </div>
                                <div className="right-side">
                                    <span className="price"><small>From</small>${new Intl.NumberFormat().format((item.price).toFixed(0))}</span>
                                </div>
                            </div>
                            <div className="action">
                                <Link to={"/flight-details/" + item.id} className="btn-second btn-small">View</Link>
                                <Link to="/booking" className="btn-first btn-submit">Book</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        });
        return (
            <section className="section-padding bg-light-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="listing-top-heading mb-xl-20">
                                        <h6 className="no-margin text-custom-black">Showing {paginationData.length} Results</h6>
                                        <div className="sort-by">
                                            <span className="text-custom-black fs-14 fw-600">Sort by</span>
                                            <div className="group-form">
                                                <select className="form-control form-control-custom custom-select">
                                                    <option>A to Z</option>
                                                    <option>Z to A</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Data */}
                                {paginationData}
                                {/* Data */}
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <nav className="pagination_layout section-padding-top mb-md-80">
                                        <Pagination
                                            activePage={this.state.activePage}
                                            itemsCountPerPage={this.state.itemPerpage}
                                            totalItemsCount={this.state.data.length}
                                            pageRangeDisplayed={this.state.data.length}
                                            onChange={this.handlePageChange.bind(this)}
                                            innerClass="pagination mb-0 justify-content-center"
                                            activeClass="active"
                                            itemClass="page-item"
                                            linkClass="page-link"
                                        />
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <aside className="col-lg-4">
                            <div className="sidebar_wrap">
                                <Sidebar />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;