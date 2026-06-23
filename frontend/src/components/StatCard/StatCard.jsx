function StatCard({
  title,
  value,
}) {
  return (
    <div
      style={{
        border:
          "1px solid #ddd",
        borderRadius:
          "12px",
        padding:
          "20px",
      }}
    >
      <h2>
        {value}
      </h2>

      <p>
        {title}
      </p>
    </div>
  );
}

export default StatCard;