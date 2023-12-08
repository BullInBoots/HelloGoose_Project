import { PendingProductType } from '../../types/PendingProductType';
import ProductSummaryItem from './ProductSummaryItem';
import ProductSummaryResult from './ProductSummaryResult';

const ProductSummary = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
    const pendingProduct = user.pendingCart.map((item:PendingProductType) => {
      return <ProductSummaryItem key={item.product.id} item={item} />;
    });
  return (
    <>
      {pendingProduct}
      <ProductSummaryResult  />
    </>
  );
}

export default ProductSummary