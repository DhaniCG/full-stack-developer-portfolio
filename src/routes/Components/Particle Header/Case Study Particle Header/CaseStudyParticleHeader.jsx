import "./CaseStudyParticleHeader.css"

export default function CaseStudyParticleHeader(props) {
    
    return (
        <a href={props.visitLink} target="_blank">
            <header className="case-study-particle">
                {/* Particle Effects */}
                <div className="particles">
                    <div className="main-particle"></div>
                    <div className="base-particle mask">
                        <div className="hover-mask top">
                            <div className="bg"></div>
                        </div>
                        <div className="hover-mask bottom">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="white-particle mask">
                        <div className="bg"></div>
                    </div>
                    <div className="rainbow-particle mask">
                        <div className="bg"></div>
                    </div>
                </div>

                {/* Header Content */}
                <h2>Case Study</h2>
                <h1>{ props.title }</h1>
                <h2 className="info">(Click to visit live site)</h2>
            </header>
        </a>
    );
}