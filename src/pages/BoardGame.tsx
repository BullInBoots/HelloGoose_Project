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
        productCategory="boardgame"
        bannerImg='/images/banner-boardgame.png'
      />
    </>
  );
}

export default BoardGame