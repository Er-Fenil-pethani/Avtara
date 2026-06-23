import {
  useEffect,
  useState,
} from "react";

import ProductCard
  from "../../components/ProductCard/ProductCard";

import api
  from "../../services/api";

function Products() {
  const [products,
    setProducts] =
    useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts =
    async () => {
      try {
        const response =
          await api.get(
            "/products"
          );

        setProducts(
          response.data.data ||
          []
        );
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>
        Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {products.map(
          (product) => (
            <ProductCard
              key={
                product.id
              }
              product={
                product
              }
            />
          )
        )}
      </div>
    </div>
  );
}

export default Products;