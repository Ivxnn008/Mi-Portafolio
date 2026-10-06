import "./Hero.css";

function Hero({
  nombre = "Ivan Garcia",
  rol = "Desarrollador frontend",
  descripcion = "Construyo interfaces limpias e interactivas centradas en la experiencia y necesidades del usuario, con mas de 10 años de experiencia.",
  foto = "./public/Image2.jpeg",
}) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-name">{nombre}</h1>
        <div className="hero-content">
          <p className="hero-role">{rol}</p>
          <p className="hero-description">{descripcion}</p>
          <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-outline">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-filled">
              Contactar
            </a>
          </div>
        </div>
      </div>

      <div className="hero-photo-wrapper">
        <img
          src={foto}
          alt={`Foto de perfil de ${nombre}`}
          className="hero-photo"
        />
      </div>
    </section>
  );
}

export default Hero;