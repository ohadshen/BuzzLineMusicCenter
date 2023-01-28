import { useEffect, useState } from "react";
import { Company } from "../models/company.model";
import { Product } from "../models/product.model";
import { ProductType } from "../models/productType.model";

export const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data = await response.json();
        debugger;
        // const productTypes: ProductType[] = [
        //   {
        //     _id: "1",
        //     name: "Product Type 1",
        //   },
        //   {
        //     _id: "2",
        //     name: "Product Type 2",
        //   },
        // ];

        // const productCompanies: Company[] = [
        //   {
        //     _id: "1",
        //     name: "Company 1",
        //     logo: "https://picsum.photos/200/300",
        //   },
        //   {
        //     _id: "2",
        //     name: "Company 2",
        //     logo: "https://picsum.photos/200/300",
        //   },
        // ];

        // const data: Product[] = [
        //   {
        //     _id: "1",
        //     name: "Product 1",
        //     image:
        //       "https://thumbs.static-thomann.de/thumb//thumb220x220/pics/prod/523524.webp",
        //     price: 100,
        //     productType: productTypes[0],
        //     productCompany: productCompanies[0],
        //   },
        //   {
        //     _id: "2",
        //     name: "Product 2",
        //     image:
        //       "https://thumbs.static-thomann.de/thumb//thumb220x220/pics/prod/523526.webp",
        //     price: 200,
        //     productType: productTypes[1],
        //     productCompany: productCompanies[1],
        //   },
        // ];

        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return { products, loading, error };
};
