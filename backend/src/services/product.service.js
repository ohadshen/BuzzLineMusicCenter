import Product from "../models/product.model.js";
import { getAllCompanies, getCompanyById } from "./company.service.js";

const getAllProducts = async () => await Product.find({})
                                    .populate("productType company");
 
const getProductById = async (id) => await Product.findById(id)
                                        .populate("productType company");

const createProduct = async (product) => await Product.create(product);

const deleteProduct = async (id) => await Product.findByIdAndDelete(id);

const editProduct = async (product) => await Product.findByIdAndUpdate(product._id, product);

const getProductsValueForCompanies = async () => {
    const companyValues = await Product.aggregate([
        { $group: { _id: "$company", value: { $sum: "$price"} } }
    ]);

    return await Promise.all(companyValues.map(async (companyValue) => {
        return { company: (await getCompanyById(companyValue._id)).name,
                 totalPrice: companyValue.value
        }
    }));
}

const getNumOfProductsForCompanies = async () => {
    const numOfProductsForCompany = await Product.aggregate([
        { $group: { _id: "$company", count: { $sum: 1 }} }
    ]);

    return await Promise.all(numOfProductsForCompany.map(async (companyCounter) => {
        return { company: (await getCompanyById(companyCounter._id)).name,
                 numOfProducts: companyCounter.count
        }
    }));
}

export { getAllProducts, getProductById, createProduct, deleteProduct, editProduct, getProductsValueForCompanies, getNumOfProductsForCompanies };
