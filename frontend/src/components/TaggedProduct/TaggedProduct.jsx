function TaggedProduct({
  product,
}) {
  if (!product)
    return null;

  return (
    <div
      style={{
        border:
          "1px solid #ddd",
        borderRadius:
          "10px",
        padding:
          "12px",
        marginTop:
          "15px",
      }}
    >
      <h4>
        Tagged Product
      </h4>

      <p>
        {product.name}
      </p>

      <p>
        ₹{product.price}
      </p>

      <button>
        Buy Now
      </button>
    </div>
  );
}

export default TaggedProduct;