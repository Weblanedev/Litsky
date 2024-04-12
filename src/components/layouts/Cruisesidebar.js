import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import line from "../../data/cruise/cruiseline.json";
// import preference from "../../data/cruise/preference.json";
// import accomodation from "../../data/cruise/accomodation.json";
// import amenities from "../../data/cruise/amenities.json";
// import cabintype from "../../data/cruise/cabintype.json";
// import IonRangeSlider from 'react-ion-slider';

class Cruisesidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceFilter: [100, 1000],
            nightFilter: [1, 10],
            minPrice: 1,
            maxPrice: 0,
            minNight: 1,
            maxNight: 0,
        };
    }
    // Price filter
    onPriceChange(event) {
        this.setState({
            minPrice: event.from,
            maxPrice: event.to
        })
        if (this.state.maxPrice !== 0 && this.state.minPrice !== 0) {
            this.props.history.push(`/cruiseprice/${this.state.minPrice}/${this.state.maxPrice}`);
        }
    }
    // Night filter
    onNightChange(event) {
        this.setState({
            minNight: event.from,
            maxNight: event.to
        })
        if (this.state.maxNight !== 0 && this.state.minNight !== 0) {
            this.props.history.push(`/cruisenight/${this.state.minNight}/${this.state.maxNight}`);
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
                            <label className="fs-14 text-custom-black fw-500">Destination</label>
                            <input type="search" name="#" className="form-control form-control-custom" placeholder="London" />
                        </div>
                        <div className="form-group">
                            <label className="fs-14 text-custom-black fw-500">Departure Date</label>
                            <div className="input-group group-form">
                                <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                <span className="input-group-append">
                                    <i className="far fa-calendar" />
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="fs-14 text-custom-black fw-500">Cruise Length</label>
                            <div className="group-form">
                                <div className="nice-select custom-select form-control form-control-custom">
                                <select>
                                    <option>1-2 Nights</option>
                                    <option>3-4 Nights</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="fs-14 text-custom-black fw-500">Cruise Line</label>
                            <div className="group-form">
                            <div className="nice-select custom-select form-control form-control-custom">
                                <select>
                                    <option>Azamara Club Cruises</option>
                                    <option>Carnival Cruise Lines</option>
                                    <option>Celebrity Cruises</option>
                                    <option>Costa Cruise Lines</option>
                                    <option>Cruise &amp; Maritime Voyages</option>
                                    <option>Crystal Cruises</option>
                                    <option>Cunard Line Ltd.</option>
                                    <option>Disney Cruise Line</option>
                                    <option>Holland America Line</option>
                                    <option>Hurtigruten Cruise Line</option>
                                    <option>MSC Cruises</option>
                                    <option>Norwegian Cruise Line</option>
                                    <option>Oceania Cruises</option>
                                    <option>Orion Expedition Cruises</option>
                                    <option>P&amp;O Cruises</option>
                                    <option>Paul Gauguin Cruises</option>
                                    <option>Peter Deilmann Cruises</option>
                                    <option>Princess Cruises</option>
                                    <option>Regent Seven Seas Cruises</option>
                                    <option>Royal Caribbean International</option>
                                    <option>Seabourn Cruise Line</option>
                                    <option>Silversea Cruises</option>
                                    <option>Star Clippers</option>
                                    <option>Swan Hellenic Cruises</option>
                                    <option>Thomson Cruises</option>
                                    <option>Viking River Cruises</option>
                                    <option>Windstar Cruises</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn-first btn-submit full-width btn-height">Search Now</button>
                    </form>
                </div>
                {/* <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Price</h5>
                    </div>
                    <div className="widget_range">
                        <div className="thc-range-inner">
                            <IonRangeSlider type="double" skin="round" hide_min_max={true} min={100} max={1000} from={this.state.priceFilter[0]} to={this.state.priceFilter[1]} grid={false} prefix="$" onChange={this.onPriceChange.bind(this)} />
                        </div>
                    </div>
                </div> */}
                {/* <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Cruise Length</h5>
                    </div>
                    <div className="widget_range">
                        <div className="thc-range-inner">
                            <IonRangeSlider type="double" skin="round" hide_min_max={true} min={1} max={10} from={this.state.nightFilter[0]} to={this.state.nightFilter[1]} grid={false} onChange={this.onNightChange.bind(this)} />
                        </div>
                    </div>
                </div> */}
                {/* <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Cruise Line</h5>
                    </div>
                    <form className="checkbox-group">
                        {line.map((item, i) => (
                            <div className="form-group" key={i}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="#" value={item.title} />
                                    <span className="checkmark" />
                                    {item.title}
                                </label>
                            </div>
                        ))}
                        <button type="button" className="btn-second btn-small">View more</button>
                    </form>
                </div> */}
                {/* <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Cruise Preference</h5>
                    </div>
                    <form className="checkbox-group">
                        {preference.map((item, i) => (
                            <div className="form-group" key={i}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="#" value={item.title} />
                                    <span className="checkmark" />
                                    {item.title}
                                </label>
                            </div>
                        ))}
                        <button type="button" className="btn-second btn-small">View more</button>
                    </form>
                </div> */}
                {/* <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Cruise Accomodation</h5>
                    </div>
                    <form className="checkbox-group">
                        {accomodation.map((item, i) => (
                            <div className="form-group" key={i}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="#" value={item.title} />
                                    <span className="checkmark" />
                                    {item.title}
                                </label>
                            </div>
                        ))}
                        <button type="button" className="btn-second btn-small">View more</button>
                    </form>
                </div> */}
                {/* <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Cruise Amenities</h5>
                    </div>
                    <form className="checkbox-group">
                        {amenities.map((item, i) => (
                            <div className="form-group" key={i}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="#" value={item.title} />
                                    <span className="checkmark" />
                                    {item.title}
                                </label>
                            </div>
                        ))}
                        <button type="button" className="btn-second btn-small">View more</button>
                    </form>
                </div> */}
                {/* <div className="sidebar_widgets">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Cabin Type</h5>
                    </div>
                    <form className="checkbox-group">
                        {cabintype.map((item, i) => (
                            <div className="form-group" key={i}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="#" value={item.title} />
                                    <span className="checkmark" />
                                    {item.title}
                                </label>
                            </div>
                        ))}
                        <button type="button" className="btn-second btn-small">View more</button>
                    </form>
                </div> */}
            </div>
        );
    }
}

export default withRouter(Cruisesidebar);