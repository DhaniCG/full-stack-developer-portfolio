import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Root.css"

export default function Root() {
    const [menu, setMenu] = useState(false);
    const [serviceBtn, setServiceBtn] = useState("#services");

    useEffect(() => {
        const services = document.getElementById("services");
        const url = window.location;
        (url.pathname === "/") || (url.pathname === "/about-me") ? setServiceBtn("#services") : setServiceBtn("/#services");
        setTimeout(() => {
            if ((services !== null) && (url.href.includes("#services"))) window.scrollTo({
                top: services.offsetTop - 100
            });
        }, 1000)
    })

    const hamburgerMenu = () => {
        const html = document.getElementById("html").classList;
        setMenu(!menu);
        !menu ? html.add("s") : html.remove("s");
    }

    return (
        <>
            <nav>
                <div className="max-width-wrapper">
                    <a href="/" className="ownership">
                        <img src="/dhani-logo.svg" alt="Dhani Web Dev" className="logo" />
                        <p>DhaniDev</p>
                    </a>
                    <div className={`nav-btns ${menu ? "active" : ""}`}>
                        <a href="/about-me">About Me <div className="nav-btn-underline"></div></a>
                        <a href="/case-study">Portfolios <div className="nav-btn-underline"></div></a>
                        {/* <a href="/blog">Blogs<div className="nav-btn-underline"></div></a> */}
                        <a href={ serviceBtn }>Services <div className="nav-btn-underline"></div></a>
                    </div>
                    <div onClick={hamburgerMenu} className={`hamburger-nav ${menu ? "active" : ""}`}>
                        <div className="line top"></div>
                        <div className="line mid"></div>
                        <div className="line btm"></div>
                    </div>
                </div>
            </nav>
            
            <Outlet />
            
            <footer>
                <div className="max-width-wrapper">
                    <div className="contents">
                        <a href="/" className="ownership">
                            <img src="/dhani-logo.svg" alt="Dhani Web Dev" className="logo" />
                            <p>DhaniDev</p>
                        </a>
                        <div className="links">
                            <div className="group">
                                <h3>Personal</h3>
                                <a href="/case-study">Portfolios</a>
                                {/* <a href="/blog">Blogs</a> */}
                                <a href="/about">About Me</a>
                                <a href="/privacy-policy">Privacy Policy</a>
                                <a href="/terms-conditions">Terms & Conditions</a>
                            </div>
                            <div className="group">
                                <h3>Services</h3>
                                <a href="/hire?service=ui-ux-design">UI/UX Design</a>
                                <a href="/hire?service=webflow-dev">Webflow Dev</a>
                                <a href="/hire?service=front-end-dev">Front-End Dev</a>
                                <a href="/hire?service=back-end-dev">Back-End Dev</a>
                                <a href="/hire?service=full-stack-dev">Full-Stack Dev</a>
                            </div>
                            <div className="group">
                                <h3>Contact</h3>
                                <a href="https://dribbble.com/DhaniDesigns">Dribbble</a>
                                <a href="https://www.behance.net/dhaniprolink">Behance</a>
                                <a href="https://www.linkedin.com/in/dhanidev/">LinkedIn</a>
                                <a href="https://github.com/DhaniCG">GitHub</a>
                                <a href="https://join.skype.com/invite/yT86wX9yK8W3">Skype</a>
                                <a href="mailto:dhani@dhanidev.com">Email</a>
                            </div>
                        </div>
                    </div>
                    <div className="credit">Made with 💙 By Achmad Nur Ramadhani</div>
                </div>
            </footer>
        </>
    );
}