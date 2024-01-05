import { useEffect } from "react";
import BasicParticleHeader from "./Components/Particle Header/Basic Particle Header/BasicParticleHeader";
import ServiceForm from "./Components/ServiceForm/ServiceForm";

export default function FormPage() {
    useEffect(() => {
        const metaDesc = "Tell me About Your Project."
        document.title = "Hire Me - DhaniDev";
        document.querySelector('meta[name="description"]').setAttribute("content", metaDesc);
    }, []);
    
    return (
        <>
            <BasicParticleHeader title="Hire Me" />
            <div className="service-form max-width-wrapper">
                <h3>Tell me About Your Project</h3>
                <ServiceForm />
            </div>
        </>
    );
}