import { useRouteError } from "react-router-dom";
import BasicParticleHeader from "./Components/Particle Header/Basic Particle Header/BasicParticleHeader";

import "./Styles/ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="section error-page max-width-wrapper">
      <h1 className="rainbow-text">{ error.status }</h1>
      <h3>{error.statusText || error.message}</h3>
      <p>{ error.message || "Oops, something's wrong" }</p>
      <div className="btns">
        <a href="/" className="btn secondary">
            <img src="/back-arrow.svg" alt="" />
            Back to Homepage
        </a>
      </div>
    </div>
  );
}

// .error.message.replace("route", "page")