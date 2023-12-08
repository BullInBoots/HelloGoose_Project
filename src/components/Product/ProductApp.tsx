import ProductBanner from './ProductBanner'
import ProductList from './ProductList'
import { ProductType } from '../../types/ProductType';
import PageIndicator from '../PageIndicator';
import Footer from '../Footer';

interface ProductAppProps {
    listName: string;
    data: ProductType[];
    productCategory: string;
    bannerImg: string;
}

const ProductApp = ({listName, data, productCategory, bannerImg}: ProductAppProps) => {
  return (
    <>
      <div className='max-w-[1140px] mx-auto mt-4'>
          <ProductBanner bannerSrc={bannerImg}/>
          <ProductList listName={listName} data={data} productCategory={productCategory}/>
          <PageIndicator />
      </div>
      <Footer />
    </>
  )
}

export default ProductApp