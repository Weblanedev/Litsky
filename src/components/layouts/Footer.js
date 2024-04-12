import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavHelper from '../../helper/NavHelper';
import insta from '../../data/instagram.json';

class Footer extends NavHelper {
    render() {
        const backToTop = this.state.stickyHeader ? ' d-block' : '';
        return (
            <Fragment>
                {/* Start Footer */}
                <footer className="section-padding footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="footer-box mb-md-40">
                                    <h4 className="text-custom-white fw-600">Parceltube</h4>
                                    <h5 className="text-custom-white"><strong>About Us</strong></h5>
                                    <p className="text-custom-white">Welcome to Parceltube, your ultimate destination for booking unforgettable tours and experiences to exciting places around the world. Discover a wide range of curated itineraries, from thrilling adventure tours to cultural explorations and everything in between. With our user-friendly platform, booking your dream tour has never been easier. Trust our expert guides and reliable partners to ensure a seamless and memorable travel experience. Start your journey today and create lifelong memories with Parceltube.
                                    </p>
                                    <p className="text-custom-white"><strong>Contact us: </strong>info@parceltube.ng</p>


                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-box mb-md-40">
                                    <h4 className="text-custom-white fw-600">Quick Links</h4>
                                    <ul className="custom links">
                                        <li>
                                            <Link to="/" className="text-custom-white">Home</Link>
                                        </li>

                                        <li>
                                            <Link to="/about" className="text-custom-white">Terms of Service</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/cruise-grid" className="text-custom-white">Cruise</Link>
                                        </li> */}


                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-box mb-sm-40">
                                    <h4 className="text-custom-white fw-600">Gallery</h4>
                                    <ul className="custom instagram gallery-grid">
                                        {/* Data */}
                                        {insta.map((item, i) => (
                                        // {insta.slice(0, 6).map((item, i) => (
                                            <li key={i}>
                                                <Link to="#" className="text-custom-white popup">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt="img" />
                                                </Link>
                                            </li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-md-6">
                                <div className="footer-box mb-sm-40">
                                    <h4 className="text-custom-white fw-600">Get travel news</h4>
                                    <div className="newsletter">
                                        <form>
                                            <div className="form-group">
                                                <input type="email" name="#" className="form-control form-control-custom" placeholder="Subscribe with email" required />
                                            </div>
                                            <button type="submit" className="btn-first btn-submit">Send me news</button>
                                        </form>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </footer>
                {/* End Footer */}
                {/* Start Copyright */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className="text-custom-white">All Right Reserved <Link to="#" className="text-custom-white">© Parceltube</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Copyright */}
                <div id="back-top" className={"back-top" + backToTop}>
                    <Link to="#" data-toggle="button" aria-pressed="true" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i className="flaticon-arrows" /></Link>
                </div>
            </Fragment>
        );
    }
}

export default Footer;