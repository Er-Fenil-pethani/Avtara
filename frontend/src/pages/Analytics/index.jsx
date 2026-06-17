function AnalyticsPage() {
  const stats = {
    brands: 12,
    products: 145,
    orders: 87,
    revenue: 245000,
  };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Analytics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            border:
              "1px solid #ddd",
            padding: "20px",
          }}
        >
          <h3>Brands</h3>
          <h1>{stats.brands}</h1>
        </div>

        <div
          style={{
            border:
              "1px solid #ddd",
            padding: "20px",
          }}
        >
          <h3>Products</h3>
          <h1>{stats.products}</h1>
        </div>

        <div
          style={{
            border:
              "1px solid #ddd",
            padding: "20px",
          }}
        >
          <h3>Orders</h3>
          <h1>{stats.orders}</h1>
        </div>

        <div
          style={{
            border:
              "1px solid #ddd",
            padding: "20px",
          }}
        >
          <h3>Revenue</h3>
          <h1>
            ₹
            {stats.revenue.toLocaleString()}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;