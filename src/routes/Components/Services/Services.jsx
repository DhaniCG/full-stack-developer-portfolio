import { useState } from "react";
import "./Services.css"

export default function Services() {
    const [rateToggle, setRateToggle] = useState(true);
    const [devToggle, setDevToggle] = useState(true);

    const features = {
        frontend: (
            <>
                <li className="rainbow-text">Everything in UI/UX Design Included</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React.js</li>
                <li>Responsive Designs</li>
                <li>API Integration</li>
                <li>Hosting (If needed)</li>
            </>
        ),
        backend: (
            <>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Complex Server-Side Functions</li>
                <li>Encryption/Security</li>
                <li>API Creation</li>
                <li>Hosting (If needed)</li>
            </>
        )
    }

    const rateToggleHandler = () => {
        setRateToggle(!rateToggle);
    }
    
    const devOptionToggle = () => {
        setDevToggle(!devToggle);
    }

    return (
        <>
            <div className="section services max-width-wrapper" id="services">
                <h2>Services</h2>
                <div onClick={rateToggleHandler} className={`rate-choices ${rateToggle ? "on" : ""}`}>
                    <div className={`option ${rateToggle ? "" : "active"}`}>Project <div className="line-1"></div></div>

                    <div className="toggle wrapper">
                        <div className="inner-toggle">
                            <div className="toggle-ball wrapper">
                                <div className="inner-toggle-ball"></div>
                            </div>
                        </div>
                    </div>

                    <div className={`option ${rateToggle ? "active" : ""}`}>Hourly <div className="line-2"></div></div>
                </div>
                <div className="service-list">
                    <div className="service-item design">
                        <h3 className="service-name">UI/UX Design</h3>
                        <div className={`service-pricing ${rateToggle ? "" : "switched"}`}>
                            <h3 className="service-rate hourly"><span className="price">$60</span>/hour</h3>
                            <h3 className="service-rate project"><span className="price">$300</span>/project</h3>
                        </div>
                        <hr />
                        <ul className="service-features">
                            <li className="rainbow-text">Webflow Development</li>
                            <li>Discovery & Research</li>
                            <li>Competitive Analysis</li>
                            <li>Define Target Audience</li>
                            <li>Sitemap</li>
                            <li>Prototyping</li>
                            <li>User Flow</li>
                            <li>Wireframe (Low-Fidelity Design)</li>
                            <li>Visual Design (High-Fidelity Design)</li>
                        </ul>
                        <div className={`cta-btn ${rateToggle ? "" : "on"}`}>
                            <div className="rate-info"><p>Price is for a small project</p></div>
                            <hr />
                            <a href={`/hire?service=ui-ux-design&rate=${rateToggle ? "Hourly" : "Project"}`} className="btn secondary">Let's Get Started <img src="/get-started-arrow.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="service-item dev">
                        <div onClick={devOptionToggle} className={`current-service ${devToggle ? "" : "switched"}`}>
                            <h3 className="service-name front-end">Front-End Development</h3>
                            <h3 className="service-name back-end">Back-End Development</h3>
                            <img src="/service-switch-icon.svg" alt="Switch" />
                        </div>
                        <div className={`service-pricing ${rateToggle ? "" : "switched"}`}>
                            <h3 className="service-rate hourly"><span className="price">${devToggle ? "80" : "90"}</span>/hour</h3>
                            <h3 className="service-rate project"><span className="price">${devToggle ? "1000" : "1500"}</span>/project</h3>
                        </div>
                        <hr />
                        <ul className="service-features">
                            { devToggle ? features.frontend : features.backend }
                        </ul>
                        <div className={`cta-btn ${rateToggle ? "" : "on"}`}>
                            <div className="rate-info"><p>Price is for a small project</p></div>
                            <hr />
                            <a href={`/hire?service=${devToggle ? "front-end-dev" : "back-end-dev"}&rate=${rateToggle ? "Hourly" : "Project"}`} className="btn secondary">Let's Get Started <img src="/get-started-arrow.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="service-item full-stack">
                        <h3 className="service-name">Full-Stack Development</h3>
                        <div className={`service-pricing ${rateToggle ? "" : "switched"}`}>
                            <h3 className="service-rate hourly"><span className="price">$90</span>/hour</h3>
                            <h3 className="service-rate project"><span className="price">$3000</span>/project</h3>
                        </div>
                        <hr />
                        <ul className="service-features">
                            <li className="rainbow-text">Everything in Front-End & Back-End Development Included</li>
                            <li>Connect Fron-End & Back-End</li>
                        </ul>
                        <div className={`cta-btn ${rateToggle ? "" : "on"}`}>
                            <div className="rate-info"><p>Price is for a small project</p></div>
                            <hr />
                            <a href={`/hire?service=full-stack-dev&rate=${rateToggle ? "Hourly" : "Project"}`} className="btn secondary">Let's Get Started <img src="/get-started-arrow.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="service-item special">
                        <h3 className="service-name">Not Sure Where To <span className="rainbow-text">Start?</span></h3>
                        <p>Let's discuss your project together, and we'll decide where we should start.</p>
                        <a href="/hire" className="rainbow-btn primary">Let's Get Started <img src="/get-started-arrow.svg" alt="" /></a>

                        {/* Particle Effects */}
                        <div className="particles left">
                            <img src="/particle-base-left-s.png" alt="" className="tablet" />
                            <div className="base-particle mask">
                                <div className="bg"></div>
                            </div>
                            <div className="white-particle mask">
                                <div className="bg"></div>
                            </div>
                            <div className="rainbow-particle mask">
                                <div className="bg"></div>
                            </div>
                        </div>
                        <div className="particles right">
                            <img src="/particle-base-right-s.png" alt="" className="tablet" />
                            <div className="base-particle mask">
                                <div className="bg"></div>
                            </div>
                            <div className="white-particle mask">
                                <div className="bg"></div>
                            </div>
                            <div className="rainbow-particle mask">
                                <div className="bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}