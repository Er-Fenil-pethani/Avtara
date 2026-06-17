function ReelsPage() {
  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Fashion Reels</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map(
          (item) => (
            <div
              key={item}
              style={{
                height: "300px",
                border:
                  "1px solid #ddd",
              }}
            >
              Reel {item}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ReelsPage;