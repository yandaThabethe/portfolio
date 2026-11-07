// import { FaReact, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
// import { SiDjango, SiPostgresql, SiJavascript } from "react-icons/si";
// import { FaCode } from "react-icons/fa";

// function Skills() {
//   return (
//     <section id="skills" className="skills">
//       <h2>Tech Stack</h2>

//       <div className="skills-container">
//         <div className="skill">
//           <FaReact /> React
//         </div>

//         <div className="skill">
//           <SiJavascript /> JavaScript
//         </div>

//         <div className="skill">
//           <FaPython /> Python
//         </div>

//         <div className="skill">
//           <SiDjango /> Django
//         </div>

//         <div className="skill">
//           <SiPostgresql /> PostgreSQL
//         </div>

//         <div className="skill">
//           <FaGitAlt /> Git
//         </div>

//         <div className="skill">
//           <FaDatabase /> SQL
//         </div>

//         <div className="skill">
//           <FaCode /> C#
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;


import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaChartBar,
  FaTools,
  FaVial,
  FaProjectDiagram
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
  SiJavascript,
  SiMysql,
  SiDotnet,
  SiBootstrap,
  SiJquery,
  SiPostman
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-container">

        {/* Programming Languages */}
        <div className="skill-category">
          <h3><FaCode /> Programming Languages</h3>
          <div className="skill-list">
            <div className="skill"><FaPython /> Python</div>
            <div className="skill"><SiJavascript /> JavaScript</div>
            <div className="skill"><FaDatabase /> SQL</div>
            <div className="skill"><FaCode /> C#</div>
            <div className="skill"><FaCode /> C++</div>
          </div>
        </div>

        {/* Frameworks and Frontend */}
        <div className="skill-category">
          <h3><FaReact /> Frameworks & Frontend</h3>
          <div className="skill-list">
            <div className="skill"><SiDjango /> Django</div>
            <div className="skill"><FaReact /> React.js</div>
            <div className="skill"><SiDotnet /> .NET</div>
            <div className="skill"><SiBootstrap /> Bootstrap</div>
            <div className="skill"><SiJquery /> jQuery</div>
            <div className="skill"><FaCode /> Django REST Framework</div>
            <div className="skill"><FaCode /> REST APIs</div>
            <div className="skill"><FaCode /> HTML & CSS</div>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-category">
          <h3><FaDatabase /> Databases</h3>
          <div className="skill-list">
            <div className="skill"><SiPostgresql /> PostgreSQL</div>
            <div className="skill"><SiMysql /> MySQL</div>
            <div className="skill"><FaDatabase /> SQL Server</div>
          </div>
        </div>

        {/* Business Intelligence */}
        <div className="skill-category">
          <h3><FaChartBar /> Business Intelligence & Data</h3>
          <div className="skill-list">
            <div className="skill"><FaChartBar /> Power BI</div>
            <div className="skill"><FaChartBar /> Power Query</div>
            <div className="skill"><FaChartBar /> DAX</div>
            <div className="skill"><FaDatabase /> SSAS</div>
            <div className="skill"><FaDatabase /> SSIS</div>
            <div className="skill"><FaDatabase /> Data Warehousing</div>
            <div className="skill"><FaDatabase /> SQL Server Agent</div>
          </div>
        </div>

        {/* Development Tools */}
        <div className="skill-category">
          <h3><FaTools /> Development Tools</h3>
          <div className="skill-list">
            <div className="skill"><FaGitAlt /> Git</div>
            <div className="skill"><SiPostman /> Postman</div>
            <div className="skill"><FaTools /> Azure DevOps</div>
            <div className="skill"><FaDatabase /> SSMS</div>
          </div>
        </div>

        {/* Testing and Design */}
        <div className="skill-category">
          <h3><FaVial /> Testing & System Design</h3>
          <div className="skill-list">
            <div className="skill"><FaVial /> Unit Testing</div>
            <div className="skill"><FaVial /> End-to-End Testing</div>
            <div className="skill"><FaVial /> Test Case Design</div>
            <div className="skill"><FaProjectDiagram /> ERDs</div>
            <div className="skill"><FaProjectDiagram /> Workflow Diagrams</div>
            <div className="skill"><FaProjectDiagram /> Use Case Diagrams</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
