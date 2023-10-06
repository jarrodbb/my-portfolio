import CardBody from "../Card/CardBody";

export default function ProfileDetailed({ user }) {
  return (
    <div className="card">
      <CardBody company={user.company} address={user.address} />
    </div>
  );
}
