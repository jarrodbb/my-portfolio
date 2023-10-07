// import CardContent from "./CardContent";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardBody({
  name,
  description,
  github,
  deployedLink,
  projectImage,
}) {
  return (
    <div
      className="p-3 p-2"
     
    >
      <section className="ms-2 me-auto p-1 object-fit-fill"  style={{ backgroundImage: `url(${projectImage})` }}>
        <h4>{name}:</h4>
        <h6 className="">{description}</h6>
        <a href={github}>Github</a>
        
        <br></br>
        {/* <img src={projectImage} alt={name} width="300" height="300"></img> */}
        <br></br>
        <a href={deployedLink}>Check it out</a>
       
      </section>
    </div>
  );
}
