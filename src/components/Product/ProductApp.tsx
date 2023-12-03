import React from 'react'
import ProductBanner from './ProductBanner'
import ProductList from './ProductList'
import { ProductType } from '../../types/ProductType';

interface ProductAppProps {
    listName: string;
    data: ProductType[];
    filterCategory: string;
}

const ProductApp = ({listName, data, filterCategory}: ProductAppProps) => {
  return (
    <div className='max-w-[1140px] mx-auto mt-4'>
        <ProductBanner bannerSrc='/images/banner-food.png'/>
        <ProductList listName={listName} data={data} filterCategory={filterCategory}/>
    </div>
  )
}

export default ProductApp