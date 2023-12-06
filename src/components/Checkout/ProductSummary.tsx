import { UserAccountType } from '../../types/UserAccountType'
import ProductSummaryItem from './ProductSummaryItem';

interface ProductSummaryProps {
    user: UserAccountType;
}

const ProductSummary = ({user}: ProductSummaryProps) => {
    const pendingProduct = user.pendingCart.map((item) => {
      return <ProductSummaryItem item={item} />;
    });
  return (
    <>
    {pendingProduct}
    </>
    
  )
}

export default ProductSummary