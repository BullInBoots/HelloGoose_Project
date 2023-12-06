import NavigationBar from '../components/NavigationBar'
import { mockUpProduct } from '../../public/data/mockUpProduct';
import ProductApp from '../components/Product/ProductApp';

const Clothes = () => {
  return (
    <>
      <NavigationBar />
      <ProductApp listName="Clothes" data={mockUpProduct} productCategory="clothes" bannerImg='/images/banner-clothes.png'/>
    </>
  );
}

export default Clothes