function ProductCard({
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
      <img
        src={
          product.imageUrl ||
          "https://placehold.co/300x300"
        }
        alt={
          product.name
        }
        style={{
          width: "100%",
          borderRadius:
            "10px",
        }}
      />

      <h3>
        {product.name}
      </h3>

      <p>
        ₹{product.price}
      </p>

      <p>
        Stock:
        {" "}
        {product.stock}
      </p>

      <button>
        Add To Cart
      </button>

      <button
        style={{
          marginLeft:
            "10px",
        }}
      >
        Wishlist
      </button>
    </div>
  );
}

export default ProductCard;