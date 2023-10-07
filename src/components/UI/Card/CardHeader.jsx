export default function CardHeader({ name, deployedLink}) {
    return (
      <div className="card-header">
        
        <a href={deployedLink} className="ms-2 me-auto">
          {name}
        </a>
      </div>
    );
  }