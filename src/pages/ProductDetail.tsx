import { mockUpProduct } from '../../public/data/mockUpProduct';
import NavigationBar from '../components/NavigationBar'
import ProductDetailInfo from '../components/Product/ProductDetailInfo';
import { ProductType } from '../types/ProductType';
import { UserAccountType } from '../types/UserAccountType';
import { useParams } from 'react-router-dom';
interface ProductDetailProps {
  productList?: ProductType[];
  user: UserAccountType; 
}

const ProductDetail = ({productList=mockUpProduct, user}: ProductDetailProps) => {
    const {id} = useParams();
  
    const selectedProduct = productList.filter((data:ProductType) => {return data.id.toString() == id})[0];
    console.log(selectedProduct);
  return (
    <>
    <NavigationBar/>
    <ProductDetailInfo item={selectedProduct} user={user}/>
    </>
  )
}

export default ProductDetail