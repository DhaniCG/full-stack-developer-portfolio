import "./AboutMe.css"

export default function AboutMe() {
    
    return (
        <>
            <div className="section about-me max-width-wrapper">
                <h2 className="tablet">About Me</h2>
                <div className="image-wrapper">
                    <img src="/about-me.png" alt="Achmad Nur Ramadhani" />
                    
                {/* Particle Effects */}
                <div className="particles top">
                        <img src="/about-particle-base-top.png" alt="" />
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
                    <div className="particles bottom">
                        <img src="/about-particle-base-bottom.png" alt="" />
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
                <div className="about-details">
                    <h2 className="desktop">About Me</h2>
                    <p>I'm a dedicated <strong>Full-Stack Developer</strong> and <strong>UI/UX Designer</strong> with a strong sense of independence and curiosity.</p>
                    <p>I'm truly passionate about crafting exceptional digital experiences and constantly seek opportunities to learn and grow.</p>
                    <p>I'm also a <strong>Webflow Developer</strong>, I want to give my clients as many options as possible while maintaining the quality of each fields</p>
                </div>
            </div>
        </>
    );
}