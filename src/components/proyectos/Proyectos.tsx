import "./Proyectos.css";

const Proyectos = () => {
  return (
    <div className="proyectos-contenedor">
      <section className="proyectos-seccion">
        <div className="proyectos-text">
          <h1>Proyectos</h1>
        </div>
        <div className="proyectos-lista">
          <div className="proyecto-item">
            <img src="/img/bingo.png" alt="" />
          </div>
          <div className="proyecto-item">
            <img src="/img/AsCont.png" alt="" />
          </div>
          <div className="proyecto-item">
            <img src="/img/Facturacion.png" alt="" />
          </div>
          <div className="proyecto-item"></div>
          <div className="proyecto-item"></div>
          <div className="proyecto-item"></div>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
