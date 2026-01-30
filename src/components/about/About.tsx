import "./About.css";
import AboutCard from "../../ui-components/AboutCard";
import VerMas from "../../ui-components/VerMas";
import LightRays from "../../ui-components/Lightrays/Particles";
import TerminalCard from "../../ui-components/TerminalCard";
import GradientText from "../../ui-components/Gradient-text/GradientText";

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
          <LightRays className="custom-rays" />
        </div>
        <div className="about-cards">
          <div className="about-cards-text">
            <div className="about-chip">
              <svg
                width="10"
                height="10"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="#2D52E8" />
              </svg>
              Welcome to my portfolio
            </div>
            <div className="about-card-text-1">
              <h1>Hello</h1>
            </div>
            <div className="about-card-text-2">
              <h1>
                I'm
                <GradientText
                  colors={["#27ffac", "#9ff9ff", "#9373fa"]}
                  animationSpeed={3}
                  showBorder={false}
                >
                  Alejandro Díaz
                </GradientText>
              </h1>
            </div>

            <div className="terminal-card">
              <TerminalCard />
            </div>
            <p>
              Programador Frontend | Backend | Apacionado por crear experiencias
              digitales únicas.
            </p>
          </div>
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
