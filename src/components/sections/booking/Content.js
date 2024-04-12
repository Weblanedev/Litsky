import React, { Component } from 'react';
import { Tab, Nav } from "react-bootstrap";
import Hotelbooking from "./Hotelbooking";
import Carbooking from "./Carbooking";
import Cruisebooking from "./Cruisebooking";
import Flightbooking from "./Flightbooking";

class Content extends Component {
    render() {
        return (
            <section className="section-padding bg-light-white booking-form">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs">
                                <Tab.Container defaultActiveKey="tab2">
                                    <Nav as="ul" varient="tabs" className="custom-flex nav nav-tabs">
                                        
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="tab2">Flights/Cruise Booking</Nav.Link>
                                        </Nav.Item>
                                      
                                    </Nav>
                                    <Tab.Content className="bg-custom-white bx-wrapper padding-20">
                                        <Tab.Pane eventKey="tab1">
                                            <Hotelbooking />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab2">
                                            <Flightbooking />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab3">
                                            <Cruisebooking />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab4">
                                            <Carbooking />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;