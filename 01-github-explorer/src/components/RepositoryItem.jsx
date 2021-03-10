export function RepositiryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "default"}</strong>
      <p>{props.repository.link}</p>

      <a href={props.repository.link}>Acessar Repositório</a>
    </li>
  );
}
