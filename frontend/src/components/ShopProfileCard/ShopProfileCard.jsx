function ShopProfileCard({
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
        {shop.name}
      </h2>

      <p>
        {
          shop.description
        }
      </p>

      <p>
        Products:
        {" "}
        {
          shop.products
            ?.length || 0
        }
      </p>
    </div>
  );
}

export default ShopProfileCard;