import React from 'react'
import { ProductType } from '../../types/ProductType'
import ProductItem from './ProductItem';

interface ProductFilteredProps {
  data: ProductType[];
}

const ProductFiltered = ({data}: ProductFilteredProps) => {
  console.log({data});

  const productFilteredList = data.map((item) => {
    return <ProductItem item={item}/>
  });

  return (
    <div className='w-full h-[492px] product-grid'>
      {productFilteredList}
    </div>
  )
}

export default ProductFiltered