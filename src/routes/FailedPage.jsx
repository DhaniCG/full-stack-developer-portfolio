import { useEffect } from "react";
import BasicParticleHeader from "./Components/Particle Header/Basic Particle Header/BasicParticleHeader";

export default function FailedPage() {
    useEffect(() => {
        const metaDesc = "Oops, Something is wrong with the form submission!"
        document.title = "Failed Form Submission - DhaniDev";
        document.querySelector('meta[name="description"]').setAttribute("content", metaDesc);
    }, []);
    
    return (
        <>
            <BasicParticleHeader title="Hire Me" />
            <div className="service-form max-width-wrapper">
                <h3>Oops, Something is wrong with the form submission!</h3>
                <p>I'm sorry for the inconvenience. I'll investigate what's wrong, in the meantime, feel free to contact me through one of these platforms.</p>
                <div className="alternatives">
                    <a href="https://join.skype.com/invite/yT86wX9yK8W3">
                        <img src="/skype.svg" alt="Skype" />
                        Skype
                    </a>
                    <a href="https://www.linkedin.com/in/dhanidesigns/">
                        <img src="/linkedin.svg" alt="LinkedIn" />
                        LinkedIn
                    </a>
                    <a href="mailto:dhani@dhanidev.com">
                        <img src="/email.svg" alt="Email" />
                        Email
                    </a>
                </div>
            </div>
        </>
    );
}