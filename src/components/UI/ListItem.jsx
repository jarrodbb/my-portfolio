export default function ListItem({ children, ...props }) {
  return (
    <li className="  " {...props}>
      {children}
    </li>
  );
}
