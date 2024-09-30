import gitResume from "../assets/gitResume.pdf";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Download my{" "}
        <a href={gitResume} download>
          RESUME
        </a>
      </p>
      <h2>Proficiencies</h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>Front-end</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div>
          <h3>Back-end</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        <div>
          <h3>Other Skills</h3>
          <ul>
            <li>Git</li>
            <li>Agile Development</li>
            <li>Responsive Design</li>
            <li>Test-Driven Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
