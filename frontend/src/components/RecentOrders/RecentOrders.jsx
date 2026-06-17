function RecentOrders() {
  const orders = [
    {
      id: "#1001",
      customer: "Rahul",
      total: "₹2,500",
    },
    {
      id: "#1002",
      customer: "Priya",
      total: "₹1,800",
    },
    {
      id: "#1003",
      customer: "Aman",
      total: "₹3,200",
    },
  ];

  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <h2>Recent Orders</h2>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse:
            "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(
            (order) => (
              <tr
                key={order.id}
              >
                <td>
                  {order.id}
                </td>

                <td>
                  {
                    order.customer
                  }
                </td>

                <td>
                  {order.total}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;