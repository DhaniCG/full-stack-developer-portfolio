import { useEffect } from "react";
import BasicParticleHeader from "./Components/Particle Header/Basic Particle Header/BasicParticleHeader";

import "./Styles/ResumePage.css";

export default function ResumePage() {
    useEffect(() => {
        const metaDesc = "Check out and download my Resume."
        document.title = "Resume - DhaniDev";
        document.querySelector('meta[name="description"]').setAttribute("content", metaDesc);

        // iFrame Size Adjustment
        // var iFrame = document.getElementById( 'resume' );
        // resizeIFrameToFitContent( iFrame );
    }, []);

    const downloadHandler = () => {
        const pdfUrl = "/resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume - DhaniDev.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // const resizeIFrameToFitContent = iFrame => {

    //     iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    //     iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
    // }
    
    return (
        <>
            <BasicParticleHeader title="My Resume" />
            <div className="service-form resume max-width-wrapper">
                <h3>Get My Resume/CV</h3>
                <div className="btns">
                    <a onClick={ downloadHandler } className="btn primary">Download</a>
                    <a href="https://drive.google.com/file/d/1liBsOkmT6EJog69jAkyczCTuEFdtvfle/view?usp=sharing" target="_blank" className="btn secondary">Google Drive</a>
                </div>
                <img src="/resume.png" alt="Resume" />
            </div>
        </>
    );
}