function AIResultCard({
  product,
}) {
  return (
    <div
      style={{
        border:
          "1px solid #ddd",
        borderRadius:
          "12px",
        padding:
          "16px",
      }}
    >
      <h3>
        {product.name}
      </h3>

      <p>
        ₹{product.price}
      </p>

      <p>
        {
          product.brand
            ?.name
        }
      </p>

      <button>
        Buy
      </button>
    </div>
  );
}

export default AIResultCard;