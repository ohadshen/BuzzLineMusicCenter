import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Product } from "../../models/product.model";
import { FiDelete, FiShoppingCart } from "react-icons/fi";

import "./index.css";
import { useGetCompanies } from "../../hooks/useGetCompanies";
import { deleteProduct, updateProduct } from "../../services/products";
import CustomDropdown from "../DropDown";
import { Company } from "../../models/company.model";
import { ProductType } from "../../models/productType.model";

export default function EditProductCard({
  product,
  companies,
  productTypes,
  refetchProducts,
}: {
  product: Product;
  companies: Company[];
  productTypes: ProductType[];
  refetchProducts: () => void;
}) {
  const [onEdit, setOnEdit] = React.useState(false);
  const [newCompany, setNewCompany] = React.useState<Company | undefined>();
  const [newProductType, setNewProductType] = React.useState<
    ProductType | undefined
  >();
  const [newPrice, setNewPrice] = React.useState<number | undefined>();
  const [newName, setNewName] = React.useState<string | undefined>();
  const [newImage, setNewImage] = React.useState<string | undefined>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editedProduct = {
      ...product,
      name: newName === undefined ? product.name : newName,
      company: newCompany === undefined ? product.company : newCompany,
      productType:
        newProductType === undefined ? product.productType : newProductType,
      price: newPrice === undefined ? product.price : newPrice,
      image: newImage === undefined ? product.image : newImage,
    };

    await updateProduct(editedProduct._id, editedProduct);

    await refetchProducts();
    setOnEdit(false);
  };

  const handleDelete = async () => {
    await deleteProduct(product._id);
    refetchProducts();
  };

  return (
    <Form className="edit-product-form" onSubmit={handleSubmit}>
      <div className="row editCardRow  my-3">
        <Card className="editProductCard">
          <div className="col-2 cardImageContainer">
            <Card.Img className="cardImage" variant="top" src={product.image} />
          </div>
          <div className="col-6">
            <Card.Body>
              <Card.Text>
                name:{" "}
                {!onEdit ? (
                  <div>{product.name}</div>
                ) : (
                  <Form.Control
                    type="string"
                    placeholder="price"
                    required
                    value={newName === undefined ? product.name : newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                )}
              </Card.Text>

              <div className="row">
                <div className="col-6 d-flex">
                  <Card.Text>
                    company:
                    {!onEdit ? (
                      <div>{product.company.name}</div>
                    ) : (
                      <CustomDropdown
                        title={
                          !!newCompany ? newCompany.name : product.company.name
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
                    )}
                  </Card.Text>
                </div>
                <div className="col-6 d-flex">
                  <Card.Text>
                    product type:
                    {!onEdit ? (
                      <div>{product.productType.name}</div>
                    ) : (
                      <CustomDropdown
                        title={
                          !!newProductType
                            ? newProductType.name
                            : product.productType.name
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
                    )}
                  </Card.Text>
                </div>
              </div>
              <Card.Text>
                price:
                {!onEdit ? (
                  <div>{product.price}</div>
                ) : (
                  <Form.Control
                    type="number"
                    placeholder="price"
                    required
                    value={newPrice === undefined ? product.price : newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                  />
                )}
              </Card.Text>
              <Card.Text>
                image:{" "}
                {!onEdit ? (
                  <div>
                    {" "}
                    {product.image.length > 50
                      ? product.image.slice(0, 30) + "..."
                      : product.image}
                  </div>
                ) : (
                  <Form.Control
                    type="string"
                    placeholder="image url"
                    required
                    value={newImage === undefined ? product.image : newImage}
                    onChange={(e) => setNewImage(e.target.value)}
                  />
                )}
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        {!onEdit && (
          <Button
            variant="secondary"
            className="costumeBtn"
            onClick={() => setOnEdit(true)}
          >
            Edit
          </Button>
        )}
        {!onEdit && (
          <Button
            variant="secondary"
            className="dangerBtn"
            onClick={handleDelete}
          >
            Delete
          </Button>
        )}
        {onEdit && (
          <Button variant="secondary" className="costumeBtn" type="submit">
            Save
          </Button>
        )}

        {onEdit && (
          <Button
            variant="secondary"
            className="costumeBtn"
            onClick={() => setOnEdit(false)}
          >
            Cancel
          </Button>
        )}
      </div>
    </Form>
  );
}
