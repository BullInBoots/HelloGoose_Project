import React from 'react'
import { ProductType } from '../../types/ProductType'
import ProductItem from './ProductItem';

interface ProductFilteredProps {
  data: ProductType[];
}

const ProductFiltered = ({data}: ProductFilteredProps) => {
    const productFilteredList = data.map((item) => {
    return <ProductItem key={item.id} item={item}/>
  });

  return (
    productFilteredList
  )
}

export default ProductFiltered