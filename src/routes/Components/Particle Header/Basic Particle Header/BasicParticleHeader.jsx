import "./BasicParticleHeader.css"

export default function BasicParticleHeader(props) {
    
    return (
        <header className="basic-particle">
            {/* Particle Effects */}
            <div className="particles">
                <div className="main-particle"></div>
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

            {/* Header Content */}
            <h1>{ props.title }</h1>
        </header>
    );
}