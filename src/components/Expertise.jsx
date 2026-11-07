
function Expertise() {
  return (
    <section id="expertise" className="expertise">

      <h2>Core Expertise</h2>

      <div className="expertise-container">

        {/* Full-Stack Development */}
        <div className="expertise-card">
          <h3>Full-Stack Development</h3>
          <p>
            Developing scalable web applications using Python,
            Django, React, JavaScript, and REST APIs. Experienced
            in backend development, frontend integration, and
            database design.
          </p>
        </div>

        {/* Production Support */}
        <div className="expertise-card">
          <h3>Production Support</h3>
          <p>
            Supporting enterprise applications through system
            monitoring, troubleshooting, SQL-based data fixes,
            system health checks, and production risk assessments
            to maintain application stability.
          </p>
        </div>

        {/* Business Intelligence */}
        <div className="expertise-card">
          <h3>Business Intelligence & Analytics</h3>
          <p>
            Developing Power BI dashboards and reports using
            Power Query and DAX. Experienced in data
            transformation, analytical reporting, and connecting
            reports to SSAS models.
          </p>
        </div>

        {/* Database & Data Warehousing */}
        <div className="expertise-card">
          <h3>Database & Data Warehousing</h3>
          <p>
            Working with SQL Server, PostgreSQL, SSMS, SSAS,
            and SSIS. Experienced in SQL development, database
            management, data warehouse monitoring, and reporting
            processes.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Expertise;
