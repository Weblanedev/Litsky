import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import type from "../../data/cars/type.json";
import agents from "../../data/cars/agents.json";
import amenities from "../../data/cars/amenities.json";
import prefrences from "../../data/cars/prefrences.json";
import IonRangeSlider from 'react-ion-slider';

class Carsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceFilter: [1, 100],
            minPrice: 1,
            maxPrice: 0,
        };
    }
    // Price filter
    onPriceChange(event) {
        this.setState({
            minPrice: event.from,
            maxPrice: event.to
        })
        if (this.state.maxPrice !== 0 && this.state.minPrice !== 0) {
            this.props.history.push(`/car/${this.state.minPrice}/${this.state.maxPrice}`);
        }
    }
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Modify Search</h5>
                    </div>
                    <form>
                        <div className="form-group">
                            <label className="fs-14 text-custom-black fw-500">Pickup From</label>
                            <input type="search" name="#" className="form-control form-control-custom" placeholder="Your Destination" />
                        </div>
                        <div className="form-group">
                            <label className="fs-14 text-custom-black fw-500">Pickup Date</label>
                            <div className="input-group group-form">
                                <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                <span className="input-group-append">
                                    <i className="far fa-calendar" />
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="fs-14 text-custom-black fw-500">Drop-Off Date</label>
                            <div className="input-group group-form">
                                <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                <span className="input-group-append">
                                    <i className="far fa-calendar" />
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="btn-first btn-submit full-width btn-height">Search Now</button>
                    </form>
                </div>
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Price</h5>
                    </div>
                    <div className="widget_range">
                        <div className="thc-range-inner">
                            <IonRangeSlider type="double" skin="round" hide_min_max={true} min={1} max={100} from={this.state.priceFilter[0]} to={this.state.priceFilter[1]} grid={false} prefix="$" onChange={this.onPriceChange.bind(this)} />
                        </div>
                    </div>
                </div>
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Car Type</h5>
                    </div>
                    <form className="checkbox-group">
                        {/* Data */}
                        {type.map((item, i) => (
                            <div className="form-group" key={i}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="#" value={item.title} />
                                    <span className="checkmark" />
                                    {item.title}
                                </label>
                            </div>
                        ))}
                        {/* Data */}
                        <button type="button" className="btn-second btn-small">View more</button>
                    </form>
                </div>
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Car Rental Agent</h5>
                    </div>
                    <form className="checkbox-group">
                        {/* Data */}
                        {agents.map((item, i) => (
                            <div className="form-group" key={i}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="#" value={item.title} />
                                    <span className="checkmark" />
                                    {item.title}
                                </label>
                            </div>
                        ))}
                        {/* Data */}
                        <button type="button" className="btn-second btn-small">View more</button>
                    </form>
                </div>
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Car Amenities</h5>
                    </div>
                    <form className="checkbox-group">
                        {/* Data */}
                        {amenities.map((item, i) => (
                            <div className="form-group" key={i}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="#" value={item.title} />
                                    <span className="checkmark" />
                                    {item.title}
                                </label>
                            </div>
                        ))}
                        {/* Data */}
                        <button type="button" className="btn-second btn-small">View more</button>
                    </form>
                </div>
                <div className="sidebar_widgets">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Car Preferences</h5>
                    </div>
                    <form className="checkbox-group">
                        {/* Data */}
                        {prefrences.map((item, i) => (
                            <div className="form-group" key={i}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="#" value={item.title} />
                                    <span className="checkmark" />
                                    {item.title}
                                </label>
                            </div>
                        ))}
                        {/* Data */}
                        <button type="button" className="btn-second btn-small">View more</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Carsidebar);