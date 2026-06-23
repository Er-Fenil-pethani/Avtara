function OutfitCard({
  products = [],
}) {
  const total =
    products.reduce(
      (sum, product) =>
        sum +
        Number(
          product.price || 0
        ),
      0
    );

  return (
    <div
      style={{
        border:
          "1px solid #ddd",
        borderRadius:
          "12px",
        padding:
          "20px",
        marginTop:
          "20px",
      }}
    >
      <h2>
        Generated Outfit
      </h2>

      {products.length === 0 && (
        <p>
          No outfit generated
        </p>
      )}

      {products.map(
        (product) => (
          <div
            key={
              product.id
            }
            style={{
              borderBottom:
                "1px solid #eee",
              padding:
                "10px 0",
            }}
          >
            <h3>
              {product.name}
            </h3>

            <p>
              ₹
              {product.price}
            </p>

            <p>
              {
                product.brand
                  ?.name
              }
            </p>
          </div>
        )
      )}

      <h3>
        Total Cost: ₹
        {total}
      </h3>

      <button>
        Buy Entire Outfit
      </button>
    </div>
  );
}

export default OutfitCard;