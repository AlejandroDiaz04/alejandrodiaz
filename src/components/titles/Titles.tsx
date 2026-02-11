import "./Titles.css";
import Loader from "../../ui-components/PacManGhost";
import Shuffle from "../../ui-components/Shuffle/Shuffle";

const Titles = () => {
  return (
    <div className="titles-contenedor">
      <h1>Titulos</h1>
      <div className="titles-parent">
        <div className="titles1"></div>
        <Loader />
        <div className="shuffle-container">
          <Shuffle
            text="Titulos en proceso"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover
            respectReducedMotion={true}
            loop={false}
            loopDelay={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Titles;
