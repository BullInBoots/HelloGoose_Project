import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { ProductType } from '../types/ProductType'

interface ProductDetailProps {
    product: ProductType
}

const ProductDetail = ({product}) => {
  return (
    <NavigationBar/>
  )
}

export default ProductDetail