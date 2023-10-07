// import CardContent from "./CardContent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardBody.css";
export default function CardBody({ description, deployedLink, projectImage }) {
  return (
    <div className="card-body">
      <section className="me-auto p-1  ">
        <div class="img__wrap ">
          <img class="img__img box-image" src={projectImage} />

          <a href={deployedLink}>
            <p class="img__description">{description}</p>{" "}
          </a>
        </div>
      </section>
    </div>
  );
}

// return (
//   <div
//     className="card-body"

//   >
//     <section className="me-auto p-1 box-image"  style={{ backgroundImage: `url(${projectImage})` }}>
//       {/* <h4>{name}:</h4> */}
//       <h6 className="">{description}</h6>

//       <br></br>
//       {/* <img src={projectImage} alt={name} width="300" height="300"></img> */}
//       <br></br>

//     </section>
//   </div>
// );
