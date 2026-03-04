function Hero() {

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Ayanda Thabethe</h1>
        <h2>Software Engineer</h2>

        <p>
          Junior Software Engineer with experience in full-stack development,
          REST APIs, and database management. Passionate about building scalable
          applications and continuously learning new technologies.
        </p>

        <div className="hero-buttons">

          <button onClick={scrollToProjects}>
            View Projects
          </button>

          <button onClick={scrollToContact}>
            Contact Me
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;