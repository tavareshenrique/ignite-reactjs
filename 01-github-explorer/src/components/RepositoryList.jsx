import { RepositiryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositiryItem repository={repository} />
        <RepositiryItem repository={repository} />
        <RepositiryItem repository={repository} />
        <RepositiryItem repository={repository} />
      </ul>
    </section>
  );
}
