// function Contact() {
//   return (
//     <section id="contact" className="contact">
//       <h2>Contact</h2>

//       <p>
//         I'm currently open to software engineering, full-stack development, and
//         production support opportunities.
//       </p>

//       <div className="contact-info">
//         <p>
//           <strong>Email:</strong> ayandathabethe2018@gmail.com
//         </p>

//         <p>
//           <strong>Phone:</strong> 076 657 8275
//         </p>

//         <p>
//           <strong>WhatsApp:</strong> 079 489 8053
//         </p>

//         <p>
//           <strong>LinkedIn:</strong>{" "}
//           <a
//             href="https://www.linkedin.com/in/ayanda-thabethe-054b66191/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             linkedin.com/in/ayanda-thabethe-054b6619
//           </a>
//         </p>

//         <p>
//           <strong>Location:</strong> Pretoria, Gauteng, South Africa
//         </p>
//       </div>
//     </section>
//   );
// }

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>

      {/* <div className="contact-info">

        <div className="contact-item">
          <h4>Email</h4>
          <p>ayandathabethe2018@gmail.com</p>
        </div>

        <div className="contact-item">
          <h4>Phone</h4>
          <p>076 657 8275</p>
        </div>

        <div className="contact-item">
          <h4>WhatsApp</h4>
          <p>079 489 8053</p>
        </div>

        <div className="contact-item">
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/ayanda-thabethe-054b66191/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn profile
          </a>
        </div>

      </div> */}

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
