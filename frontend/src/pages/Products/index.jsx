import { useEffect, useState } from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import {
  getProducts,
} from "../../services/product.service";

function ProductsPage() {
  const [products, setProducts] =
    useState([]);

  const loadProducts =
    async () => {
      try {
        const response =
          await getProducts();

        setProducts(
          response.data || []
        );
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Products</h1>

      <ProductForm
        onCreated={
          loadProducts
        }
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(300px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map(
          (product) => (
            <div
              key={product.id}
              style={{
                border:
                  "1px solid #ddd",
                borderRadius:
                  "10px",
                padding: "20px",
              }}
            >
              <h3>
                {product.name}
              </h3>

              <p>
                {
                  product.description
                }
              </p>

              <p>
                ₹
                {product.price}
              </p>

              <p>
                Stock:
                {" "}
                {product.stock}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ProductsPage;