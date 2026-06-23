function QuickStats({
  title,
  value,
}) {
  return (
    <div
      style={{
        background:
          "#fff",
        padding:
          "20px",
        borderRadius:
          "12px",
        border:
          "1px solid #ddd",
      }}
    >
      <h4>
        {title}
      </h4>

      <h2>
        {value}
      </h2>
    </div>
  );
}

export default QuickStats;