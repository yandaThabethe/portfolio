function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>

      <div className="contact-info">
        {/* Email */}
        <div className="contact-item">
          <h4>Email</h4>
          <a href="mailto:ayandathabethe2018@gmail.com">
            ayandathabethe2018@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="contact-item">
          <h4>Phone</h4>
          <a href="tel:+27766578275">076 657 8275</a>
        </div>

        {/* WhatsApp */}
        <div className="contact-item">
          <h4>WhatsApp</h4>
          <a
            href="https://wa.me/27794898053"
            target="_blank"
            rel="noopener noreferrer"
          >
            079 489 8053
          </a>
        </div>

        {/* LinkedIn */}
        <div className="contact-item">
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/ayanda-thabethe-054b66191/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ayanda Thabethe
          </a>
        </div>
      </div>

      <div className="contact-location">Gauteng, South Africa</div>
    </section>
  );
}

export default Contact;
