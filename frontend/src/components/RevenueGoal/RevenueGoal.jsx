function RevenueGoal() {
  const currentRevenue = 245000;
  const goalRevenue = 500000;

  const progress =
    (currentRevenue /
      goalRevenue) *
    100;

  return (
    <div
      style={{
        marginTop: "40px",
        border:
          "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h2>
        Revenue Goal
      </h2>

      <p>
        ₹
        {currentRevenue.toLocaleString()}
        {" / "}
        ₹
        {goalRevenue.toLocaleString()}
      </p>

      <div
        style={{
          width: "100%",
          height: "20px",
          background:
            "#e5e5e5",
          borderRadius:
            "20px",
          overflow:
            "hidden",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            width:
              `${progress}%`,
            height:
              "100%",
            background:
              "#111",
          }}
        />
      </div>

      <p
        style={{
          marginTop: "10px",
        }}
      >
        {progress.toFixed(1)}
        % Complete
      </p>
    </div>
  );
}

export default RevenueGoal;