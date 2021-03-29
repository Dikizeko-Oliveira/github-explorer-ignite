import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList() {
  const [respositories, setRepositories] = useState([]);
  
  useEffect(() => {
  fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);
  

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {respositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  )
}