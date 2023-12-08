import { PendingProductType } from '../../types/PendingProductType';

interface ProductSummaryItemProps {
    item: PendingProductType;
}

const ProductSummaryItem = ({item} : ProductSummaryItemProps) => {
    
    const {product, quantity, additionalRequest} = item;
    
  return (
    <div className="flex justify-between mt-3">
        <div>
            <div className="font-Poppins font-semibold text-2xl text-util">{product.name} x {quantity}</div>
            <div className="font-Inter text-sm leading-3 text-util">{additionalRequest}</div>
        </div>
        <div>
            <div className="font-Poppins font-semibold text-2xl text-util text-opacity-60">{'฿' + product.price * quantity}</div>
        </div>
    </div>
  )
}

export default ProductSummaryItem