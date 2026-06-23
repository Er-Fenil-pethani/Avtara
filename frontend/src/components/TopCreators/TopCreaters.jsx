function TopCreators() {
  const creators =
    [
      {
        id: 1,
        name:
          "Fashion King",
      },
      {
        id: 2,
        name:
          "Style Guru",
      },
      {
        id: 3,
        name:
          "Trend Master",
      },
    ];

  return (
    <div>
      <h2>
        Top Creators
      </h2>

      {creators.map(
        (creator) => (
          <div
            key={
              creator.id
            }
            style={{
              border:
                "1px solid #ddd",
              marginBottom:
                "10px",
              padding:
                "10px",
            }}
          >
            {
              creator.name
            }
          </div>
        )
      )}
    </div>
  );
}

export default TopCreators;