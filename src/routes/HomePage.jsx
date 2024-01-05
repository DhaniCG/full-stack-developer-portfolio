import HomePageHeader from "./Components/Home Page Header/HomePageHeader";
import MySkills from "./Components/My Skills/MySkills";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/About Me/AboutMe";
import WorkingProcess from "./Components/Working Process/WorkingProcess";
import Services from "./Components/Services/Services";

import "./Styles/HomePage.css";

export default function HomePage() {
    const projectNames = ["webflowportfolio", "it23", "meetup"];
    return (
        <div className="home">
            <HomePageHeader />
            <MySkills />
            <Projects projects={projectNames} />
            <AboutMe />
            <WorkingProcess />
            <Services />
        </div>
    );
}