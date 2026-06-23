import {
  useEffect,
  useState,
} from "react";

import {
  getReels,
} from "../../services/reels.service";

import ReelCard
  from "./ReelCard";

function ReelsPage() {
  const [reels,
    setReels] =
    useState([]);

  useEffect(() => {
    loadReels();
  }, []);

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

  return (
    <div
      style={{
        maxWidth:
          "800px",
        margin:
          "0 auto",
        padding:
          "30px",
      }}
    >
      <h1>
        Fashion Reels
      </h1>

      {reels.map(
        (reel) => (
          <ReelCard
            key={
              reel.id
            }
            reel={reel}
          />
        )
      )}
    </div>
  );
}

export default ReelsPage;