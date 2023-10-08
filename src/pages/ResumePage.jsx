//Import resume 
import resume from "../assets/pdf/resume.pdf";
//Import CSS for specific page styling
import "./Resume.css"

//Function to return the resume page

export default function ResumePage() {
  return (
    <div>
      <div className="title-boarder rounded-circle">
        <h1>Resume</h1>
      </div>
      <div className="p-3 container">
        <div className="p-3 ">
          <a
            href={resume}
            download="Example-PDF-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button-style">Download .pdf file</button>
          </a>
        </div>
        <div className="display-resume">
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
        </div>
        <div className="display-resume">
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
      </div>
    </div>
  );
}
