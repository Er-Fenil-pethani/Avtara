import { useEffect, useState } from "react";

function BrandsPage() {
  const [brands, setBrands] =
    useState([]);

  useEffect(() => {
    setBrands([
      {
        id: 1,
        name: "Nike",
        description:
          "Sportswear Brand",
      },
      {
        id: 2,
        name: "Adidas",
        description:
          "Fashion & Sports",
      },
      {
        id: 3,
        name: "Puma",
        description:
          "Lifestyle Brand",
      },
    ]);
  }, []);

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Brands</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(300px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {brands.map(
          (brand) => (
            <div
              key={brand.id}
              style={{
                border:
                  "1px solid #ddd",
                borderRadius:
                  "10px",
                padding: "20px",
              }}
            >
              <h2>
                {brand.name}
              </h2>

              <p>
                {
                  brand.description
                }
              </p>

              <button
                style={{
                  marginTop:
                    "10px",
                }}
              >
                View Brand
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default BrandsPage;