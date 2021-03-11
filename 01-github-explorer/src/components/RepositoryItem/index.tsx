import { IRepositoryItemProps } from "./@interfaces";

export function RepositoryItem({ repository }: IRepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>Acessar Repositório</a>
    </li>
  );
}
