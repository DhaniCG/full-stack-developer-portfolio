import { useEffect } from "react";
import BasicParticleHeader from "./Components/Particle Header/Basic Particle Header/BasicParticleHeader";

export default function ThankYouPage() {
    useEffect(() => {
        const metaDesc = "Thank you for choosing me! I will answer your form as soon as possible!"
        document.title = "Thank You - DhaniDev";
        document.querySelector('meta[name="description"]').setAttribute("content", metaDesc);
    }, []);
    
    return (
        <>
            <BasicParticleHeader title="Hire Me" />
            <div className="service-form max-width-wrapper">
                <h3>Thank you for choosing me!</h3>
                <p>I will answer your form as soon as possible!</p>
            </div>
        </>
    );
}