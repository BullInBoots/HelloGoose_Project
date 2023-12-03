import React, { ReactHTMLElement, useEffect, useState } from 'react'
import { ProductType } from '../../types/ProductType';
import ProductFiltered from './ProductFiltered';

interface ProductListProps {
    listName: string;
    data: ProductType[];
    filterCategory: string;
}

const ProductList = ({listName, data, filterCategory}: ProductListProps) => {
    
    const [productList, setProductList] = useState(data);
    // initial filter
    
    
    // just use setProductLIst for filtering
    const filterByCategory = (category: string) => {
    }

    const filterByPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    }

    const filterByShippingPrice = () => {
        
    }
    
  return (
    <>
    <div className='flex justify-between items-center my-8'>
        <div>
            <h2 className='font-Inter font-semibold text-2xl'>{listName} Products</h2>
        </div>
        <div className='flex items-center'>
            <p className="font-Inter font-semibold text-base">SHOWING 8 of PRODUCT_LENGTH</p>
            <button onClick={() => {console.log("Hello")}} className='bg-secondary text-white'>Free Shipping</button>
            <select onChange={filterByPrice} id="">
                <option value="priceHighToLow">Price : High to Low</option>
                <option value="priceLowToHigh">Price : Low to High</option>
            </select>
        </div>
    </div>
    {/* Product Filter Output */}
    <ProductFiltered data={productList}/>
    </>
  )
}

export default ProductList