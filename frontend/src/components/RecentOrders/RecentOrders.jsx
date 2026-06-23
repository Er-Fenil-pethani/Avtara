function RecentOrders() {
  const orders = [
    {
      id: 1,
      customer:
        "Rahul",
    },
    {
      id: 2,
      customer:
        "Priya",
    },
    {
      id: 3,
      customer:
        "Amit",
    },
  ];

  return (
    <div>
      <h2>
        Recent Orders
      </h2>

      {orders.map(
        (order) => (
          <div
            key={
              order.id
            }
          >
            Order #
            {order.id}
            {" - "}
            {
              order.customer
            }
          </div>
        )
      )}
    </div>
  );
}

export default RecentOrders;