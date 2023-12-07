import { ProductType } from '../../types/ProductType'
import ProductItem from './ProductItem';

interface ProductFilteredProps {
  data: ProductType[];
  isOnSale?: boolean
}

const ProductFiltered = ({data, isOnSale=false}: ProductFilteredProps) => {
    const productFilteredList = data.map((item) => {
    return <ProductItem key={item.id} item={item} isOnSale={isOnSale}/>
  });

  return (
    productFilteredList
  )
}

export default ProductFiltered