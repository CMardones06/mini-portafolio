import Ilustracion from "../components/Ilustracion"

function SobreMi() {
  return (
    <div className="container page-section about-page">
    <section className="about-intro">
    <div className="profile-image">
    <Ilustracion tipo="persona" />
    </div>

    <div>
    <h1>Sobre mí</h1>
    <p>
      Soy Camila Mardones, estudiante de Ingeniería Civil
      en Informática. Me interesa el desarrollo web y aprender
      a crear aplicaciones interactivas y funcionales.
    </p>
    </div>
    </section>
    <section className="text-section">
    <h2>¿Qué estudio?</h2>
    <p>
    Estudio Ingeniería Civil en Informática en la
    Universidad Católica de Temuco.
    </p>
    </section>
    </div>
    );
}

export default SobreMi