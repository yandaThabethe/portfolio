import { FaReact, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiJavascript } from "react-icons/si";
import { FaCode } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Tech Stack</h2>

      <div className="skills-container">
        <div className="skill">
          <FaReact /> React
        </div>

        <div className="skill">
          <SiJavascript /> JavaScript
        </div>

        <div className="skill">
          <FaPython /> Python
        </div>

        <div className="skill">
          <SiDjango /> Django
        </div>

        <div className="skill">
          <SiPostgresql /> PostgreSQL
        </div>

        <div className="skill">
          <FaGitAlt /> Git
        </div>

        <div className="skill">
          <FaDatabase /> SQL
        </div>

        <div className="skill">
          <FaCode /> C#
        </div>
      </div>
    </section>
  );
}

export default Skills;
