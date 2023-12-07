import { UserAccountType } from '../../types/UserAccountType'
import ProductSummaryItem from './ProductSummaryItem';
import ProductSummaryResult from './ProductSummaryResult';

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
      <ProductSummaryResult user={user} />
    </>
  );
}

export default ProductSummary