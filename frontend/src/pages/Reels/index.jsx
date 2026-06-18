import {
  useEffect,
  useState,
} from "react";

import {
  getReels,
} from "../../services/reels.service";

function ReelsPage() {
  const [reels,
    setReels] =
    useState([]);

  const loadReels =
    async () => {
      try {
        const response =
          await getReels();

        setReels(
          response.data || []
        );
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    loadReels();
  }, []);

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>
        Fashion Reels
      </h1>

      {reels.map(
        (reel) => (
          <div
            key={reel.id}
            style={{
              border:
                "1px solid #ddd",
              padding:
                "20px",
              marginBottom:
                "20px",
            }}
          >
            <h3>
              {reel.title}
            </h3>

            <p>
              {
                reel.caption
              }
            </p>

            <video
              width="400"
              controls
            >
              <source
                src={
                  reel.videoUrl
                }
              />
            </video>

            <p>
              Likes:
              {" "}
              {
                reel.likes
                  ?.length
              }
            </p>

            <p>
              Comments:
              {" "}
              {
                reel.comments
                  ?.length
              }
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default ReelsPage;