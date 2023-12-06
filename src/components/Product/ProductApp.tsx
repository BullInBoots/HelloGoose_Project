import ProductBanner from './ProductBanner'
import ProductList from './ProductList'
import { ProductType } from '../../types/ProductType';

interface ProductAppProps {
    listName: string;
    data: ProductType[];
    productCategory: string;
    bannerImg: string;
}

const ProductApp = ({listName, data, productCategory, bannerImg}: ProductAppProps) => {
  return (
    <div className='max-w-[1140px] mx-auto mt-4'>
        <ProductBanner bannerSrc={bannerImg}/>
        <ProductList listName={listName} data={data} productCategory={productCategory}/>
    </div>
  )
}

export default ProductApp