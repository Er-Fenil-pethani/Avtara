function ShopCard({
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

      <button>
        Visit Shop
      </button>
    </div>
  );
}

export default ShopCard;