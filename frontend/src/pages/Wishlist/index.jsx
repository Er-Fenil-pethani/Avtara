import {
  useEffect,
  useState,
} from "react";

import {
  getWishlist,
} from "../../services/wishlist.service";

function Wishlist() {
  const [items,
    setItems] =
    useState([]);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist =
    async () => {
      try {
        const response =
          await getWishlist();

        setItems(
          response.data || []
        );
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>
        Wishlist
      </h1>

      {items.map(
        (item) => (
          <div
            key={item.id}
          >
            <h3>
              {
                item.product
                  ?.name
              }
            </h3>
          </div>
        )
      )}
    </div>
  );
}

export default Wishlist;