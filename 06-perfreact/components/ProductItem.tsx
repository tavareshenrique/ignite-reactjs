import { memo, useState } from 'react';
import dynamic from 'next/dynamic';

import { IAddProductsToWishListProps } from './AddProductTToWishlist';

const AddProductToWishlist = dynamic<IAddProductsToWishListProps>(async () => {
  const mod = await import('./AddProductTToWishlist');

  return mod.AddProductToWishlist;
}, {
  loading: () => <span>Carregando...</span>
})

interface IProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
}

// Shallow Compare -> Comparação Rasa

function ProductItemComponent({ product }: IProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  function onAdddToWishList(id: number) {
    console.log(id);
  }

  // async function showFormattttedDate() {
  //   const { format } = await import('date-fns');

  //   format()
  // }

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)} >Adicionar aos favoritos</button>
      
      {isAddingToWishlist && (       
        <AddProductToWishlist
          onAddToWishList={() => onAdddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});

/**
 * Quando usar o Memo?
 * 
 * 1. Pure Functional Components;
 *    -> Em casos que você divide a interface do App, por exemplo;
 * 2. Renders too often;
 * 3. Re-renders with the same props;
 * 4. Medium to big size;
 */