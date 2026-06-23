function FeaturedShop({
  shop,
}) {
  return (
    <div
      style={{
        border:
          "1px solid #ddd",
        borderRadius:
          "12px",
        padding:
          "20px",
      }}
    >
      <h2>
        Featured Shop
      </h2>

      <h3>
        {shop.name}
      </h3>

      <p>
        {
          shop.description
        }
      </p>
    </div>
  );
}

export default FeaturedShop;