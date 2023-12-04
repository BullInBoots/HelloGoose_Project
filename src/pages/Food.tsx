import React from 'react'
import NavigationBar from '../components/NavigationBar'
import ProductApp from '../components/Product/ProductApp'
import {mockUpProduct} from '../../public/data/mockUpProduct';

const Food = () => {
  return (
    <>
    <NavigationBar/>
    <ProductApp listName='Food' data={mockUpProduct} productCategory='food'/>
    </>
  )
}

export default Food