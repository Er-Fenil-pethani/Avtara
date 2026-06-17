function SystemStatus() {
  const services = [
    {
      name: "API Server",
      status: "Online",
    },
    {
      name: "Database",
      status: "Online",
    },
    {
      name: "Authentication",
      status: "Online",
    },
    {
      name: "Storage",
      status: "Online",
    },
  ];

  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <h2>System Status</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(2,1fr)",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {services.map(
          (service) => (
            <div
              key={service.name}
              style={{
                border:
                  "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                display: "flex",
                justifyContent:
                  "space-between",
              }}
            >
              <span>
                {service.name}
              </span>

              <span>
                {
                  service.status
                }
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SystemStatus;