import CategoryCard
  from "../DashboardCharts/CategoryCard/CategoryCard";

function Categories() {
  const categories =
    [
      "Men",
      "Women",
      "Streetwear",
      "Formal",
      "Wedding",
      "Luxury",
    ];

  return (
    <div>
      <h2>
        Categories
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3,1fr)",
          gap: "15px",
        }}
      >
        {categories.map(
          (
            category
          ) => (
            <CategoryCard
              key={
                category
              }
              title={
                category
              }
            />
          )
        )}
      </div>
    </div>
  );
}

export default Categories;