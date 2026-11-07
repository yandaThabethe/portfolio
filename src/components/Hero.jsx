function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      {/* Left side - Introduction */}
      <div className="hero-content">
        <h1>Hi, I'm Ayanda Thabethe</h1>
        <h2>Software Engineer</h2>

        <p>
          Software Engineer with experience in full-stack development,
          enterprise production support, Business Intelligence, and database
          management. Skilled in building scalable applications, troubleshooting
          enterprise systems, developing data-driven solutions, and improving
          business processes through technology.
        </p>

        <div className="hero-buttons">
          <button onClick={scrollToProjects}>View Projects</button>

          <button onClick={scrollToContact}>Contact Me</button>
        </div>
      </div>

      {/* Right side - Developer illustration */}
      <div className="hero-visual">
        <div className="visual-glow"></div>

        <div className="code-window">
          <div className="window-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-content">
            <p>
              <span>def</span> build_solutions():
            </p>
            <p className="code-indent">
              return <span>"Better Systems"</span>
            </p>
          </div>
        </div>

        <div className="laptop">
          <div className="laptop-screen">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="laptop-base"></div>
        </div>

        <div className="tech-icons">
          <div> &lt;/&gt; </div>
          <div> ◉ </div>
          <div> ▤ </div>
          <div> ◈ </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
