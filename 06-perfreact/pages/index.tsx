import { FormEvent, useState } from 'react';
import { SearchResult } from '../components/SearchResult';

import styles from '../styles/Home.module.css'

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setResults(data);
  }

  return (
    <div>
        <h1>Search</h1>

        <form onSubmit={handleSearch} >
          <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
  
      <SearchResult results={results} />
    </div>
  )
}
