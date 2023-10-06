import CardContent from './CardContent'

export default function CardBody({ company, address }) {
  return (
    <div className="card-body">
      <CardContent {...company} />
    </div>
  );
}