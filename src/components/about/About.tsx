import React from "react";
import "./About.css";
import AboutCard from "../../ui-components/AboutCard";
import VerMas from "../../ui-components/VerMas";
import LightRays from "../../ui-components/Lightrays/Particles";

function downloadCV() {
  const link = document.createElement("a");
  link.href = "/cv/currículum_AlejandroDiaz.pdf";
  link.download = "Alejandro_Diaz_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const About = () => {
  return (
    <div className="about-content" id="about">
      <section className="about-section" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            pointerEvents: "none",
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#870091"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <h1 style={{ position: "relative", zIndex: 1 }}>About Me</h1>
        <div className="about-cards">
          <div className="about-cards-container">
            <AboutCard />
          </div>
        </div>
        <div className="text-contenedor">
          <div className="text-contenedor-izquierdo">
            <h1>Estudios realizados</h1>
            <p>
              He realizado estudios en Ingeniería en Sistemas Computacionales en
              la Universidad Tecnológica de León, donde adquirí conocimientos
              sólidos en programación, desarrollo de software y gestión de
              proyectos. Además, he complementado mi formación con cursos y
              certificaciones en tecnologías específicas para mantenerme al día
              con las últimas tendencias del sector.
            </p>
            <div className="botones-contenedor">
              <VerMas />
            </div>
          </div>
          <div className="text-contenedor-derecho">
            <h1>Descargar CV</h1>
            <p>
              Puedes descargar mi currículum vitae en formato
              <span style={{ color: "rgb(150, 94, 255)" }}> PDF</span> haciendo
              clic en el siguiente boton:
            </p>
            <button onClick={downloadCV} className="Btn">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
              <span className="tooltip">Download</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
