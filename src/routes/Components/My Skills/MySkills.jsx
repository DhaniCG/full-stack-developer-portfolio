import "./MySkills.css"

export default function MySkills() {
    
    return (
        <>
            <div className="section my-skills max-width-wrapper">
                <h2>My Skills</h2>
                <div className="skills-container">
                    {/* Skills Items */}
                    <div className="skill-item">
                        <img src="/html5.svg" alt="HTML" className="skill-icon" />
                        <div className="skill-name">HTML5</div>
                    </div>
                    <div className="skill-item">
                        <img src="/css3.svg" alt="CSS" className="skill-icon" />
                        <div className="skill-name">CSS3</div>
                    </div>
                    <div className="skill-item">
                        <img src="/javascript.svg" alt="Javascript" className="skill-icon" />
                        <div className="skill-name">Javascript</div>
                    </div>
                    <div className="skill-item">
                        <img src="/jquery.svg" alt="jQuery" className="skill-icon" />
                        <div className="skill-name">jQuery</div>
                    </div>
                    <div className="skill-item">
                        <img src="/node-js.svg" alt="Node.js" className="skill-icon" />
                        <div className="skill-name">Node.js</div>
                    </div>
                    <div className="skill-item">
                        <img src="/react.svg" alt="React.js" className="skill-icon" />
                        <div className="skill-name">Reacts.js</div>
                    </div>
                    <div className="skill-item">
                        <img src="/mongodb.svg" alt="MongoDB" className="skill-icon" />
                        <div className="skill-name">MongoDB</div>
                    </div>
                    <div className="skill-item">
                        <img src="/express.svg" alt="Express.js" className="skill-icon" />
                        <div className="skill-name">Express.js</div>
                    </div>
                    <div className="skill-item">
                        <img src="/figma.svg" alt="Figma" className="skill-icon" />
                        <div className="skill-name">Figma</div>
                    </div>
                    <div className="skill-item">
                        <img src="/affinity-designer.svg" alt="Affinity Designer" className="skill-icon" />
                        <div className="skill-name">Affinity Designer</div>
                    </div>
                    <div className="skill-item">
                        <img src="/affinity-photo.svg" alt="Affinity Photo" className="skill-icon" />
                        <div className="skill-name">Affinity Photo</div>
                    </div>
                    <div className="skill-item">
                        <img src="/webflow.svg" alt="Webflow" className="skill-icon" />
                        <div className="skill-name">Webflow</div>
                    </div>

                    {/* Particle Effects */}
                    <div className="particles left">
                        <img src="/particle-base-left.png" alt="" className="desktop" />
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
                        <img src="/particle-base-right.png" alt="" className="desktop" />
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
        </>
    );
}