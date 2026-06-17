function DashboardCharts() {
  const sales = [
    12000,
    18000,
    15000,
    25000,
    22000,
    30000,
  ];

  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <h2>
        Monthly Revenue
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "end",
          gap: "15px",
          height: "250px",
          marginTop: "20px",
        }}
      >
        {sales.map(
          (amount, index) => (
            <div
              key={index}
              style={{
                flex: 1,
              }}
            >
              <div
                style={{
                  height:
                    amount / 150,
                  background:
                    "#111",
                  borderRadius:
                    "8px 8px 0 0",
                }}
              />

              <p
                style={{
                  textAlign:
                    "center",
                }}
              >
                M{index + 1}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default DashboardCharts;