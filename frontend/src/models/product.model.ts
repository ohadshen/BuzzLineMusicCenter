import { Company } from "./company.model";
import { ProductType } from "./productType.model";

export interface Product {
    _id: string;
    name: string;
    image: string;
    price: number;
    productType: ProductType;
    productCompany: Company;
}