import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import carblock from '../../../data/cars/cars.json';
import Sidebar from '../../layouts/Carsidebar';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: carblock,
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
                <div className="hotel-grid mb-xl-30">
                    <div className="hotel-grid-wrapper car-grid bx-wrapper">
                        <div className="image-sec animate-img">
                            <Link to={"/car-details/" + item.id}>
                                <img src={process.env.PUBLIC_URL + "/" + item.image} className="full-width" alt={item.title} />
                            </Link>
                        </div>
                        <div className="hotel-grid-caption padding-20 bg-custom-white p-relative">
                            <h4 className="title fs-16"><Link to={"/car-details/" + item.id} className="text-custom-black">{item.title}<small className="text-light-dark">Per
                                day</small></Link></h4>
                            <span className="price"><small>From</small>${new Intl.NumberFormat().format((item.price).toFixed(0))}</span>
                            <div className="action">
                                <Link to={"/car-details/" + item.id} className="btn-second btn-small">View</Link>
                                <Link to="/booking" className="btn-first btn-submit yellow">Book</Link>
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