function InventoryCard({
  item,
}) {
  return (
    <div
      style={{
        border:
          "1px solid #ddd",
        padding:
          "15px",
        borderRadius:
          "12px",
      }}
    >
      <h3>
        {
          item.product
            ?.name
        }
      </h3>

      <p>
        Stock:
        {" "}
        {item.stock}
      </p>
    </div>
  );
}

export default InventoryCard;