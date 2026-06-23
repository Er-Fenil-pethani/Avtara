function TrendingProducts({
  products,
}) {
  return (
    <div>
      <h2>
        Trending Products
      </h2>

      {products.map(
        (product) => (
          <div
            key={
              product.id
            }
            style={{
              border:
                "1px solid #ddd",
              marginBottom:
                "10px",
              padding:
                "10px",
            }}
          >
            {product.name}
          </div>
        )
      )}
    </div>
  );
}

export default TrendingProducts;