function CategoryCard({
  title,
}) {
  return (
    <div
      style={{
        padding: "20px",
        border:
          "1px solid #ddd",
        borderRadius:
          "12px",
        textAlign:
          "center",
      }}
    >
      <h3>
        {title}
      </h3>
    </div>
  );
}

export default CategoryCard;