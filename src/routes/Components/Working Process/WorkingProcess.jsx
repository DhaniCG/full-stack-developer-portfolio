import "./WorkingProcess.css"

export default function WorkingProcess(props) {
    
    return (
        <>
            <div className="section working-process max-width-wrapper">
                <h2>Working Process</h2>
                <div className="process">
                    <div className="step">
                        <img src="/working-process-1.svg" alt="Discovery And Research" />
                        <div className="step-details">
                            <h3>1. Discovery & Research</h3>
                            <p>Understand the project's objectives, Analyze competitors' websites, and Define Target Audience</p>
                        </div>
                    </div>
                    <div className="step">
                        <img src="/working-process-2.svg" alt="Discovery And Research" />
                        <div className="step-details">
                            <h3>2. Wireframe</h3>
                            <p>Create a hierarchical structure and develop low-fidelity wireframes for layouts and content placement of the website</p>
                        </div>
                    </div>
                    <div className="step">
                        <img src="/working-process-3.svg" alt="Discovery And Research" />
                        <div className="step-details">
                            <h3>3. UI/UX Design</h3>
                            <p>Create high-fidelity design mockups, define user journeys and interactions, and Ensure the design's  accessibility standards</p>
                        </div>

                        {/* Particle Effects */}
                        <div className="particles">
                            <img src="/working-process-particle-base.png" alt="" />
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
                    <div className="step">
                        <img src="/working-process-4.svg" alt="Discovery And Research" />
                        <div className="step-details">
                            <h3>4. Front-End Development</h3>
                            <p>Convert design mockups into React.js code and make it responsive for all devices</p>
                        </div>
                    </div>
                    <div className="step">
                        <img src="/working-process-5.svg" alt="Discovery And Research" />
                        <div className="step-details">
                            <h3>5. Back-End Development</h3>
                            <p>Create a server-side code to implement the website's database structure and API development in Express.js</p>
                        </div>
                    </div>
                    <div className="step">
                        <img src="/working-process-6.svg" alt="Discovery And Research" />
                        <div className="step-details">
                            <h3>6. Integration & Testing</h3>
                            <p>Connect the Front-End & Back-End, perform quality testing, and fix any issues and inconsistencies</p>
                        </div>
                    </div>
                    <div className="step">
                        <img src="/working-process-7.svg" alt="Discovery And Research" />
                        <div className="step-details">
                            <h3>7. Deployment</h3>
                            <p>Choosing a web hosting service, configure the domain & implement SSL for security, and publish website publicly</p>
                        </div>
                    </div>
                    <div className="step">
                        <img src="/working-process-8.svg" alt="Discovery And Research" />
                        <div className="step-details">
                            <h3>8. Documentation & Handover</h3>
                            <p>Create user documentation for administrators and provide training and resources for the team taking over the project</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}