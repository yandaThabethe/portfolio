
function Experience() {
  const experiences = [
    {
      role: "BI Analyst",
      company: "Motus Care Rental",
      period: "June 2026 – Present",
      technologies: "SQL, SSMS, SSAS, SSIS, Power BI, Power Query, DAX",
      responsibilities: [
        "Developed a Data Warehouse Monitoring Dashboard using Power BI.",
        "Designed and developed a Debtors Report to support business reporting and data analysis.",
        "Used Power Query to transform, clean, and prepare data for reporting.",
        "Created DAX measures and connected Power BI reports to SSAS cubes using Live Connection.",
        "Created SQL Server Agent jobs to automate model refresh processes."
      ]
    },
    {
      role: "Software Engineer",
      company: "Contracted at Deloitte",
      period: "June 2024 – October 2025",
      technologies: "SQL, Azure DevOps, Git, Postman, Agile",
      responsibilities: [
        "Provided production support for enterprise applications, diagnosing and resolving system incidents.",
        "Implemented SQL-based data fixes in live environments while maintaining database integrity.",
        "Conducted system health checks, monitoring, and production risk assessments.",
        "Performed blast radius analysis before production changes.",
        "Created operational documentation and training materials to improve team efficiency."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Artificial Intelligence Campus (Previously Empire Partner Foundation Innovation Campus)",
      period: "June 2023 – May 2024",
      technologies: "Python, Django, Django REST Framework, PostgreSQL, React, Git",
      responsibilities: [
        "Developed full-stack web applications using Python, Django, and PostgreSQL.",
        "Built RESTful APIs using Django REST Framework.",
        "Designed database schemas, ERDs, workflow diagrams, and activity diagrams.",
        "Collaborated within an Agile team, contributing to sprint planning and user stories.",
        "Implemented unit testing and end-to-end testing to validate application functionality."
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>

      <div className="experience-timeline">
        {experiences.map((job, index) => (
          <div className="experience-card" key={index}>

            <div className="experience-header">
              <div>
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
              </div>

              <span className="experience-period">
                {job.period}
              </span>
            </div>

            <p className="experience-tech">
              {job.technologies}
            </p>

            <ul>
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
