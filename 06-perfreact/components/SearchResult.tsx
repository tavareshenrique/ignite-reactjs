import React from "react";

import { ProductItem } from './ProductItem';

interface ISearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResult({ results }: ISearchResultsProps) {
  return (
    <div>
      {results.map((product) => (
        <ProductItem key={product.id} product={product}  />
      ))}
    </div>
  )
}