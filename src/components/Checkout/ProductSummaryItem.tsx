import { PendingProductType } from '../../types/PendingProductType';

interface ProductSummaryItemProps {
    item: PendingProductType;
}

const ProductSummaryItem = ({item} : ProductSummaryItemProps) => {
    
    const {product, quantity, additionalRequest} = item;
    
  return (
    <div className="min-w-[628px] max-h-[656px] max-w flex justify-between bg-tertiary rounded-md p-8">
        <div>
            <div className="font-Poppins font-semibold text-2xl">{product.name} x {quantity}</div>
            <div className="font-Inter text-sm leading-3">{additionalRequest}</div>
        </div>
        <div>
            <div className="font-Poppins font-semibold text-2xl text-black text-opacity-60">{'฿' + product.price * quantity}</div>
        </div>
    </div>
  )
}

export default ProductSummaryItem