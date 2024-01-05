import { useEffect } from "react";

import AboutMe from "./Components/About Me/AboutMe";
import WorkingProcess from "./Components/Working Process/WorkingProcess";
import Services from "./Components/Services/Services";
import BasicParticleHeader from "./Components/Particle Header/Basic Particle Header/BasicParticleHeader";

import "./Styles/AboutMePage.css";

export default function AboutMePage() {
    useEffect(() => {
        const metaDesc = "I'm a dedicated Full-Stack Developer and UI/UX Designer with a strong sense of independence and an insatiable curiosity. I'm truly passionate about crafting exceptional digital experiences and constantly seek opportunities to learn and grow."
        document.title = "About Me - DhaniDev";
        document.querySelector('meta[name="description"]').setAttribute("content", metaDesc);
    }, []);

    return (
        <div className="about">
            <BasicParticleHeader title="About Me" />
            <AboutMe />
            <WorkingProcess />
            <Services />
        </div>
    );
}