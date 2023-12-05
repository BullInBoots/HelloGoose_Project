import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { mockUpProduct } from '../../public/data/mockUpProduct';
import ProductApp from '../components/Product/ProductApp';

const BoardGame = () => {
  return (
    <>
      <NavigationBar />
      <ProductApp
        listName="Board Game"
        data={mockUpProduct}
        productCategory="clothes"
        bannerImg='/images/banner-boardgame.png'
      />
    </>
  );
}

export default BoardGame