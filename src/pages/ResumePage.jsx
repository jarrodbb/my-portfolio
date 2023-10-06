import resume from "../assets/pdf/resume.pdf";

export default function ResumePage() {
  return (
    <div>
      <h1>Resume</h1>

      <a
        href={resume}
        download="Example-PDF-document"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Download .pdf file</button>
      </a>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>javaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySql, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>Rest</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
