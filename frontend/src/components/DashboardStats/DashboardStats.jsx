function DashboardStats() {
  const stats = [
    {
      title: "Brands",
      value: 0,
    },
    {
      title: "Products",
      value: 0,
    },
    {
      title: "Orders",
      value: 0,
    },
    {
      title: "Revenue",
      value: "₹0",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(4,1fr)",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      {stats.map((stat) => (
        <div
          key={stat.title}
          style={{
            border:
              "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h3>
            {stat.title}
          </h3>

          <h1>
            {stat.value}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;