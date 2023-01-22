import { Product } from "./product.model";
import { User } from "./user.model";

export interface Sales {
    _id: string;
    products: Product[];
    user: User;
    date: Date;
    totalPrice: number;
}