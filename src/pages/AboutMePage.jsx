//Import beautiful image of myself
import jarrodB from "../assets/images/J_Blanning.jpg";
//import specific css
import "./AboutMe.css";

//Function to handle the contents of the About Me page
export default function AboutMePage() {
  return (
    <div>
      <div className="title-boarder rounded-circle">
      <h1 >About me</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-md-4 p-0">
              <img className="img-fluid rounded-start" src={jarrodB} />
            </div>
            <div className="col-md-8 about-me-background">
              <div className="card-body">
                <h2 className="card-title ">Jarrod Blanning</h2>
                <p className="card-text pt-3">
                  I'm local to the Gold Coast in Queensland and currently run a
                  micro brewery called Lost Palms. My knowledge of coding is
                  improving everyday with experience gathered from doing diverse
                  projects that challenge my front-end and back-end abilities
                  <br ></br>
                  <br ></br>
                  The plan is to improve to a level where it becomes usable for
                  my current business. That being said, i'm open to looking
                  around to see what jobs are available. As I continue my coding
                  experience, it will be updated here. Enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
