import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Product } from "../../models/product.model";
import { FiDelete, FiShoppingCart } from "react-icons/fi";

import "./index.css";
import { useGetCompanies } from "../../hooks/useGetCompanies";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../services/products";
import CustomDropdown from "../DropDown";
import { Company } from "../../models/company.model";
import { ProductType } from "../../models/productType.model";

export default function AddProductCard({
  companies,
  productTypes,
  refetchProducts,
}: {
  companies: Company[];
  productTypes: ProductType[];
  refetchProducts: () => void;
}) {
  const [newCompany, setNewCompany] = React.useState<Company | undefined>();
  const [newProductType, setNewProductType] = React.useState<
    ProductType | undefined
  >();
  const [newPrice, setNewPrice] = React.useState<number | undefined>();
  const [newName, setNewName] = React.useState<string | undefined>();
  const [newImage, setNewImage] = React.useState<string | undefined>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct: Product = {
      name: newName,
      company: newCompany,
      price: newPrice,
      image: newImage,
      productType: newProductType,
    };

    await addProduct(newProduct);

    await refetchProducts();

    clearForm();
  };

  const clearForm = () => {
    setNewCompany(undefined);
    setNewProductType(undefined);
    setNewPrice(NaN);
    setNewName("");
    setNewImage("");
  };

  return (
    <Form className="edit-product-form" onSubmit={handleSubmit}>
      <div className="row editCardRow  my-3">
        <Card className="editProductCard">
          <div className="col-2 cardImageContainer">
            <Card.Img
              className="cardImage"
              variant="top"
              src={
                !!newImage
                  ? newImage
                  : "https://static.vecteezy.com/system/resources/previews/004/853/486/non_2x/picture-gallery-image-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg"
              }
            />
          </div>
          <div className="col-6">
            <Card.Body>
              <Card.Text>
                name:{" "}
                <Form.Control
                  type="string"
                  placeholder="Enter Product Name"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </Card.Text>
              <div className="row">
                <div className="col-6 d-flex">
                  <Card.Text>
                    company:
                    <CustomDropdown
                      title={
                        !!newCompany ? newCompany.name : "Choose a company"
                      }
                      options={companies.map((company) => company.name)}
                      onSelect={(companyName) =>
                        setNewCompany(
                          companies.find(
                            (company) => company.name === companyName
                          )
                        )
                      }
                    />
                  </Card.Text>
                </div>
                <div className="col-6 d-flex">
                  <Card.Text>
                    product type:
                    <CustomDropdown
                      title={
                        !!newProductType
                          ? newProductType.name
                          : "Choose a productType"
                      }
                      options={productTypes.map(
                        (productType) => productType.name
                      )}
                      onSelect={(productTypeName) =>
                        setNewProductType(
                          productTypes.find(
                            (productType) =>
                              productType.name === productTypeName
                          )
                        )
                      }
                    />
                  </Card.Text>
                </div>
              </div>
              <Card.Text>
                price:
                <Form.Control
                  type="number"
                  placeholder="Enter Product Price"
                  required
                  value={newPrice}
                  onChange={(e) => setNewPrice(Number(e.target.value))}
                />
              </Card.Text>
              <Card.Text>
                image:
                <Form.Control
                  type="string"
                  placeholder="Enter Product Image"
                  required
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                />
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <Button variant="secondary" className="costumeBtn" type="submit">
          Add Product
        </Button>
      </div>
    </Form>
  );
}
