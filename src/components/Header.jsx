import jarrodB from "../assets/images/J_blanning.jpg"
import "./Header.css";
export default function Header({}) {
    return (
      <div>
        <h1 className="jarrod-title p-2">Jarrod Blanning</h1>
      </div>
    )
}

// <div className="image">
// <img src = {jarrodB}/>
// </div>
// <div className="text">
// <h1>Jarrod Blanning</h1>

<div className="container">
<div className="card">
    <div className="row">
        <div className="col-md-4">
        <img className="img-fluid rounded-start"src = {jarrodB}/>
        </div>
<div className="col-md-8">
<div className="card-body">
<h3 className="card-title">Jarrod Blanning</h3>
</div>

</div>
    </div>

</div>
</div>
