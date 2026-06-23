function ProductFilters({
  search,
  setSearch,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <input
        placeholder="Search Product"
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <input
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) =>
          setMinPrice(
            e.target.value
          )
        }
      />

      <input
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(
            e.target.value
          )
        }
      />
    </div>
  );
}

export default ProductFilters;