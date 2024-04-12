import React from 'react';
import counter from '../../../data/counter.json';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className="about-counter parallax section-padding">
            <div className="container">
                <div className="row">
                    {/* Data */}
                    {counter.map((item, i) => (
                        <div className="col-lg-3 col-sm-6" key={i}>
                            <div className="counter-box">
                                <div className="counter-box-inner">
                                    <div className="counter text-center">
                                        <div className="icon">
                                            <i className={item.icon} />
                                        </div>
                                        <CountUp start={focus ? 0 : null} end={item.value} duration={5} redraw={true}>
                                            {({ countUpRef }) => (
                                                <VisibilitySensor
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setFocus(true);
                                                        }
                                                    }}
                                                >
                                                    <div ref={countUpRef} className="count" />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <cite className="text-custom-blue fw-500 fs-14">{item.title}</cite>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </div>
            </div>
        </div>
    );
}

export default Counter;