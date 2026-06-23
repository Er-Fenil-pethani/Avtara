function AnalyticsChart() {
  const data = [
    {
      label: "Jan",
      value: 40,
    },
    {
      label: "Feb",
      value: 70,
    },
    {
      label: "Mar",
      value: 55,
    },
    {
      label: "Apr",
      value: 90,
    },
  ];

  return (
    <div>
      <h2>
        Revenue Analytics
      </h2>

      {data.map(
        (item) => (
          <div
            key={
              item.label
            }
            style={{
              marginBottom:
                "10px",
            }}
          >
            <p>
              {
                item.label
              }
            </p>

            <div
              style={{
                height: "20px",
                width:
                  `${item.value}%`,
                background:
                  "#333",
              }}
            />
          </div>
        )
      )}
    </div>
  );
}

export default AnalyticsChart;