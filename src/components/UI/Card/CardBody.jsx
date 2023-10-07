// import CardContent from "./CardContent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardBody.css"
export default function CardBody({
  
  description,
  github,

  projectImage,
}) {
  return (
    <div
      className="card-body"
     
    >
      <section className="ms-2 me-auto p-1 box-image"  style={{ backgroundImage: `url(${projectImage})` }}>
        {/* <h4>{name}:</h4> */}
        <h6 className="">{description}</h6>
        <a href={github}>Github</a>
        
        <br></br>
        {/* <img src={projectImage} alt={name} width="300" height="300"></img> */}
        <br></br>
        
       
      </section>
    </div>
  );
}
