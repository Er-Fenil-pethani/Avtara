import {
  useEffect,
  useState,
} from "react";

import ShopCard
  from "../../components/ShopCard/ShopCard";

import SearchBar
  from "../../components/SearchBar/SearchBar";

import api
  from "../../services/api";

function Shops() {
  const [shops,
    setShops] =
    useState([]);

  const [search,
    setSearch] =
    useState("");

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops =
    async () => {
      try {
        const response =
          await api.get(
            "/brands"
          );

        setShops(
          response.data.data ||
          []
        );
      } catch (error) {
        console.error(error);
      }
    };

  const filtered =
    shops.filter(
      (shop) =>
        shop.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <div>
      <h1>
        Shops
      </h1>

      <SearchBar
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        placeholder="Search Shops"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {filtered.map(
          (shop) => (
            <ShopCard
              key={
                shop.id
              }
              shop={shop}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Shops;