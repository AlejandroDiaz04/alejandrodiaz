import React from "react";
import "./inicio.css";
import DarkVeil from "../../ui-components/Fondo-inicio/DarkVeil";
import GradientText from "../../ui-components/Gradient-text/GradientText";
import TextType from "../../ui-components/TypeText/TextType";
import ContactButton from "../../ui-components/ContactButton";
import { ProyectsButton } from "../../ui-components/ProyectsButton/ProyectsButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Redes from "../../ui-components/Redes";
type Props = {};

export default function inicio({}: Props) {
  return (
    <div className="inicio-contenedor" id="home">
      <DarkVeil />
      <section className="inicio-seccion">
        <div className="contenedor-izquierdo">
          <div className="contenedor-texto">
            <h1>
              FRONTEND <br />
              <GradientText
                colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                DEVELOPER
              </GradientText>
            </h1>
            <TextType
              text={["Diseñador web y aplicaiciones moviles"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />

            <h4>
              Diseñador autodidacta con experiencia en desarrollo <br />
              frontend y diseño de interfaces. Apasionado por crear
              <br /> experiencias de usuario atractivas y funcionales.
            </h4>
            <div className="chips-contenedor">
              <div className="herramientas-contenedor">
                <p>React</p>
              </div>
              <div className="herramientas-contenedor">
                <p>TypeScript</p>
              </div>
              <div className="herramientas-contenedor">
                <p>Next.js</p>
              </div>
              <div className="herramientas-contenedor">
                <p>React Native</p>
              </div>
            </div>
          </div>
          <div className="redes-contenedor">
            <Redes />
          </div>
          <div className="contenedor-botones">
            <ProyectsButton />
            <ContactButton />
          </div>
        </div>
        <div className="contenedor-derecho">
          <div className="canva-animado">
            <DotLottieReact
              src="https://lottie.host/60a2d7d2-31c2-4329-854d-b3d4f1f77074/j3BItjjEEz.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </section>
    </div>
  );
}
