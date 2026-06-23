function OutfitSummary({
  products,
}) {
  const total =
    products.reduce(
      (sum, item) =>
        sum +
        Number(
          item.price
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
      }}
    >
      <h2>
        Outfit Summary
      </h2>

      <p>
        Total Items:
        {" "}
        {
          products.length
        }
      </p>

      <p>
        Total Cost:
        {" ₹"}
        {total}
      </p>
    </div>
  );
}

export default OutfitSummary;