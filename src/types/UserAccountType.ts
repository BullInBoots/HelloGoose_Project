import { PendingProductType } from "./PendingProductType";
import { ProductType } from "./ProductType";

export interface UserAccountType {
    username: string;
    pendingCart: PendingProductType[];
    favoriteProduct: ProductType[];
}