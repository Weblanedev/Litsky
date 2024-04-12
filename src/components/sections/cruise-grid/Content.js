import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cruiseblock from '../../../data/cruise/cruise.json';
import { getFilteredCruise } from '../../../helper/cruiseHelper';
import { Rating } from '../../../helper/helper';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getCruises(),
            activePage: 1,
            itemPerpage: 8
        }
    }
    getCruises() {
        var minPrice = this.props.minPrice ? this.props.minPrice : '';
        var maxPrice = this.props.maxPrice ? this.props.maxPrice : '';
        var minNight = this.props.minNight ? this.props.minNight : '';
        var maxNight = this.props.maxNight ? this.props.maxNight : '';
        var filteredItems = getFilteredCruise(cruiseblock, { priceFilter: [minPrice, maxPrice], nightFilter: [minNight, maxNight] });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                <div className="cruise-grid mb-xl-30">
                    <div className="cruise-grid-wrapper bx-wrapper">
                        <div className="image-sec animate-img">
                            <Link to={"/cruise-details/" + item.id}>
                                <img src={process.env.PUBLIC_URL + "/" + item.image} className="full-width" alt={item.title} />
                            </Link>
                        </div>
                        <div className="cruise-grid-caption padding-20 bg-custom-white p-relative">
                            <h4 className="title fs-16 no-margin"><Link to={"/cruise-details/" + item.id} className="text-custom-black">{item.title}<small className="text-light-dark">{item.night} Nights</small></Link></h4>
                            <span className="price"><small>From</small>${new Intl.NumberFormat().format((item.price).toFixed(0))}</span>
                            <div className="feedback">
                                <div className="ratings">
                                    <div className="rating">
                                        {Rating(item.rating)}
                                    </div>
                                </div>
                                <span className="review fs-12 text-light-white">{item.reviews.length} reviews</span>
                            </div>
                            <div className="row time">
                                <div className="date col-6">
                                    <i className="far fa-clock text-yellow fs-18" />
                                    <div className="text-light-dark fs-12">
                                        <span className="text-custom-blue">Date</span><br />{item.cruisedate}
                                    </div>
                                </div>
                                <div className="departure col-6">
                                    <i className="fas fa-map-marker-alt text-yellow fs-18" />
                                    <div className="text-light-dark fs-12">
                                        <span className="text-custom-blue">Departure</span><br />{item.deplocation}
                                    </div>
                                </div>
                            </div>
                            <div className="action">
                                {/* <Link to={"/cruise-details/" + item.id} className="btn-second btn-small">View</Link> */}
                                <Link to={"/cruise-details/" + item.id} className="btn-first btn-submit">Book</Link>
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
                            <nav className="pagination_layout section-padding-top">
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
            </section>
        );
    }
}

export default Content;