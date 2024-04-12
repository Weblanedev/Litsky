import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrencyState } from '../../Context/CurrencyContext';
// import NavHelper from '../../helper/NavHelper';

// class Header extends NavHelper {
function Header() {

    const {
        state: { currency, currencies, rate },
        dispatch: dispatchCurrency
    } = CurrencyState();

    console.log(currency, currencies, rate)

    const [ activeCurrency, setActiveCurrency ] = useState(
        localStorage.getItem('currency')
    )
    //handle currency update
    const handleChangeCurrency = ({ target: { value } }) => {
        //update context currency state with the active state from select option
        dispatchCurrency({
            type: value,
            payload: value,
        })
        setActiveCurrency(value)

        //set the current current to local storage for persistency
    }

    console.log(handleChangeCurrency)


    useEffect(() => {
        // on page reload activeCurency clears the state, prevent it from updating localstorage
        if (activeCurrency === undefined) return

        //only update local storage when activeCurrency has a value
        window.localStorage.setItem('currency', activeCurrency || 'USD');
    }, [ activeCurrency ]);

    // render() {
    // const stickyHeader = this.state.stickyHeader ? ' sticky' : '';
    // const stickyHeader = (stickyHeader ? ' sticky' : '');
    return (
        <header className="header">
            {/* Navigation */}
            {/* <div className={"navigation" + stickyHeader}> */}
            <div className={"navigation"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-navigation">
                                <div className="logo">
                                    <Link to="/">
                                        <b style={{ fontSize: '30px' }}>
                                            Parceltube
                                        </b>
                                        {/* <img src={process.env.PUBLIC_URL + "/assets/images/toor-logo.png"} className="img-fluid image-fit" alt="img" /> */}
                                    </Link>
                                </div>
                                {/* <span className="currency">Currency :</span>
                                <select style={{ border: 'none' }} defaultValue={activeCurrency} onChange={handleChangeCurrency} >
                                    {currencies.map((currency, idx) => (
                                        <option
                                            defaultValue={activeCurrency}
                                            value={currency}
                                            key={idx + currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select> */}
                                {/* <div className={this.state.navMethod === true ? 'main-menu active' : 'main-menu'}> */}
                                {/* <div className={this.state.navMethod === true ? 'main-menu active' : 'main-menu'}>
                                        <div className="logo">
                                            <Link to="/">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/toor-logo.png"} className="img-fluid image-fit" alt="img" />
                                            </Link>
                                        </div>
                                                                               
                                        <div className="cta-btn">
                                            <Link to="/about" className="btn-first btn-submit">Enquiry Now</Link>
                                        </div>
                                    </div> */}
                                {/* <div className="hamburger-menu" onClick={this.toggleNav}>
                                        <div className={this.state.navMethod === true ? 'menu-btn active' : 'menu-btn'}>
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navigation */}
        </header>
    );
    // }
}

export default Header;