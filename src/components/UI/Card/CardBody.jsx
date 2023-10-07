// import CardContent from "./CardContent";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardBody({
  
  description,
  github,
  deployedLink,
  projectImage,
}) {
  return (
    <div
      className="card-body"
     
    >
      <section className="ms-2 me-auto p-1 h-100"  style={{ backgroundImage: `url(${projectImage})` }}>
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
