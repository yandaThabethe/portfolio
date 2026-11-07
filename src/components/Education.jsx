function Education() {
  const education = [
    {
      qualification: "Advanced Diploma in Computer Science",
      institution: "Tshwane University of Technology",
      period: "February 2024 – Present",
      status: "In Progress",
    },
    {
      qualification: "Diploma in Information Technology: Software Development",
      institution: "Tshwane University of Technology",
      period: "January 2019 – December 2023",
      status: "Completed",
    },
  ];

  const certifications = [
    {
      name: "Software Design and Architecture",
      institution: "University of Alberta",
    },
    {
      name: "Foundational C#",
      institution: "Microsoft",
    },
    {
      name: "Pandas for Data Analysis",
      institution: "DataCamp",
    },
    {
      name: "ICAgile Certified Professional",
      institution: "ICAgile",
    },
    {
        name: "AZ-900 Azure Fundamentals",
        institution:"Microsoft"
    }
  ];

  return (
    <section id="education" className="education">
      <h2>Education & Certifications</h2>

      <div className="education-container">
        <div className="education-column">
          <h3>Education</h3>

          {education.map((item, index) => (
            <div className="education-card" key={index}>
              <h4>{item.qualification}</h4>
              <p>{item.institution}</p>
              <span>{item.period}</span>
              <span className="education-status">{item.status}</span>
            </div>
          ))}
        </div>

        <div className="certifications-column">
          <h3>Certifications</h3>

          {certifications.map((item, index) => (
            <div className="certification-card" key={index}>
              <h4>{item.name}</h4>
              <p>{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;