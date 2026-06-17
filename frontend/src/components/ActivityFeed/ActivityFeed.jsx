function ActivityFeed() {
  const activities = [
    {
      id: 1,
      action: "New brand created",
      time: "5 min ago",
    },
    {
      id: 2,
      action: "Product added",
      time: "12 min ago",
    },
    {
      id: 3,
      action: "Inventory updated",
      time: "25 min ago",
    },
    {
      id: 4,
      action: "Order received",
      time: "40 min ago",
    },
  ];

  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <h2>Activity Feed</h2>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {activities.map(
          (activity) => (
            <div
              key={activity.id}
              style={{
                border:
                  "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <strong>
                {activity.action}
              </strong>

              <p>
                {activity.time}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ActivityFeed;