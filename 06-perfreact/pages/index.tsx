import { FormEvent, useState } from 'react';
import { SearchResult } from '../components/SearchResult';

type Results = {
  totalPrice: number;
  data: any[];
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: []
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    const products = data.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      priceFormatted: formatter.format(product.price)
    }));

    const totalPrice = data.reduce((total, prtoduct) => {
      return total + prtoduct.price
    }, 0);

    setResults({ totalPrice, data: products });
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
  
      <SearchResult results={results.data} totalPrice={results.totalPrice} />
    </div>
  )
}

/**
 * - Fluxo de Renderização de um Componente (3 Steps):
 * 
 * 1. Cria uma nova versão do componente;
 * 2. Comparar com a versão anterior;
 * 3. Se houverem alterações, irá atualizar o que alterou;
 */
