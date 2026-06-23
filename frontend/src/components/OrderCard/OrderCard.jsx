function OrderCard({
  order,
}) {
  return (
    <div
      style={{
        border:
          "1px solid #ddd",
        padding:
          "20px",
        borderRadius:
          "12px",
        marginBottom:
          "15px",
      }}
    >
      <h3>
        Order #
        {order.id}
      </h3>

      <p>
        Status:
        {" "}
        {order.status}
      </p>

      <p>
        Total:
        {" ₹"}
        {order.total}
      </p>
    </div>
  );
}

export default OrderCard;