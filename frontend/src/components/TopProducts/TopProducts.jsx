function TopProducts() {
  const products = [
    {
      id: 1,
      name: "Oversized Hoodie",
      sales: 145,
    },
    {
      id: 2,
      name: "Cargo Pants",
      sales: 112,
    },
    {
      id: 3,
      name: "Graphic T-Shirt",
      sales: 98,
    },
    {
      id: 4,
      name: "Denim Jacket",
      sales: 76,
    },
  ];

  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <h2>Top Products</h2>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {products.map(
          (product) => (
            <div
              key={product.id}
              style={{
                border:
                  "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                display: "flex",
                justifyContent:
                  "space-between",
              }}
            >
              <span>
                {product.name}
              </span>

              <span>
                {product.sales} sales
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default TopProducts;