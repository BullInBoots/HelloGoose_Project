import NavigationBar from '../components/NavigationBar'
import ProductDetailInfo from '../components/Product/ProductDetailInfo';
import { ProductType } from '../types/ProductType';
import { UserAccountType } from '../types/UserAccountType';
import {mockUpUserData} from '../../public/data/mockUpUserData'
import { mockUpProduct } from '../../public/data/mockUpProduct';
interface ProductDetailProps {
  productList: ProductType[];
  user: UserAccountType; 
}

const ProductDetail = ({productList=mockUpProduct, user=mockUpUserData}: ProductDetailProps) => {
    const hash = parseInt(window.location.hash.slice(1));
    const selectedProduct = productList.filter((data:ProductType) => {return data.id == hash})[0];
  return (
    <>
    <NavigationBar/>
    <ProductDetailInfo item={selectedProduct} user={user}/>
    </>
  )
}

export default ProductDetail