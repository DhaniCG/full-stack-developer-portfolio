import "./HomePageHeader.css"

export default function HomePageHeader() {

    return (
        <>
            <header>
                <div className="pictures">
                    <img src="/programming-bg.png" alt="" className="bg-image left" />
                    <img src="/design-bg.png" alt="" className="bg-image right" />
                    <img src="/header-pic.png" alt="Achmad Nur Ramadhani" className="self-pic" />
                    <div className="black-transition"></div>
                </div>
                <div className="introduction">
                    <h2 className="hey">Hey, my name is</h2>
                    <h2 className="name">Achmad Nur Ramadhani</h2>
                    <h1>A <span className="rainbow-text">Full-Stack Developer</span></h1>
                    <h1>& <span className="rev-rainbow-text">UI/UX Designer</span></h1>
                </div>
                <div className="cta">
                    <a href="/hire" className="rainbow-btn primary">Hire Me!</a>
                    <a href="/resume" className="rainbow-btn secondary">See My Resume/CV</a>
                </div>
            </header>
        </>
    );
}