import { memo } from 'react';

interface IProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

// Shallow Compare -> Comparação Rasa

function ProductItemComponent({ product }: IProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
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