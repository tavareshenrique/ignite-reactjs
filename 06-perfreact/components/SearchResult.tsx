import React, { useMemo } from "react";

import { ProductItem } from './ProductItem';

interface ISearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResult({ results }: ISearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, prtoduct) => {
      return total + prtoduct.price
    }, 0);
  }, [results])

  return (
    <div>
      <h2>Total Price: {totalPrice}</h2>

      {results.map((product) => (
        <ProductItem key={product.id} product={product}  />
      ))}
    </div>
  )
}

/**
 * Quando usar o useMemo?
 * 
 * 1. Para cálculos pesados;
 * 2. Igualdade referencial (quando repassa aquela informação para um componente filho);
 */