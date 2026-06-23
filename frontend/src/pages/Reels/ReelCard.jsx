function ReelCard({
  reel,
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
        marginBottom:
          "20px",
      }}
    >
      <video
        width="100%"
        controls
      >
        <source
          src={
            reel.videoUrl
          }
        />
      </video>

      <h3>
        {reel.title}
      </h3>

      <p>
        {reel.caption}
      </p>

      <div>
        ❤️
        {" "}
        {
          reel.likes
            ?.length || 0
        }

        {"  |  "}

        💬
        {" "}
        {
          reel.comments
            ?.length || 0
        }
      </div>

      <button>
        Like
      </button>

      <button
        style={{
          marginLeft:
            "10px",
        }}
      >
        Comment
      </button>

      <button
        style={{
          marginLeft:
            "10px",
        }}
      >
        Save
      </button>
    </div>
  );
}

export default ReelCard;