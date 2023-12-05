export interface ProductType {
    id: number;
    name: string;
    price: number;
    category: string;
    image_url?: string;
    shipping_cost: number;
    description: string;
    alt_description?: string;
}