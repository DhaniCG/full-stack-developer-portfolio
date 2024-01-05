import { useEffect } from "react";
import BasicParticleHeader from "./Components/Particle Header/Basic Particle Header/BasicParticleHeader";
import Projects from "./Components/Projects/Projects";

import { projectData } from "./Components/Projects/Project/projectsData";

import "./Styles/PortfoliosPage.css";

export default function PortfoliosPage() {
    let projects = [];

    for (let item in projectData) projects.push(item);

    useEffect(() => {
        const metaDesc = "See my portfolios on Web Development and UI/UX Designs.";
        document.title = "Portfolio - DhaniDev";
        document.querySelector('meta[name="description"]').setAttribute("content", metaDesc);
    }, [])

    return (
        <div className="portfolios">
            <BasicParticleHeader title="Projects" />
            <Projects projects={projects} />
        </div>
    );
}