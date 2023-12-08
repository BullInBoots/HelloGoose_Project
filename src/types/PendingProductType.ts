import { ProductType } from "./ProductType";

export interface PendingProductType {
    product: ProductType;
    quantity: number;
    additionalRequest?:string;
}
