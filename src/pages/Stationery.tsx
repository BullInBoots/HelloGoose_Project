import NavigationBar from '../components/NavigationBar'
import { mockUpProduct } from '../../public/data/mockUpProduct';
import ProductApp from '../components/Product/ProductApp';

const Stationery = () => {
  return (
    <>
      <NavigationBar />
      <ProductApp
        listName="Stationery"
        data={mockUpProduct}
        productCategory="stationery"
        bannerImg='/images/banner-stationery.png'
      />
    </>
  );
}

export default Stationery