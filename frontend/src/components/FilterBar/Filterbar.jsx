function FilterBar({
  occasion,
  setOccasion,
  budget,
  setBudget,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        marginBottom: "20px",
      }}
    >
      <select
        value={occasion}
        onChange={(e) =>
          setOccasion(
            e.target.value
          )
        }
      >
        <option value="">
          Occasion
        </option>

        <option value="Casual">
          Casual
        </option>

        <option value="Wedding">
          Wedding
        </option>

        <option value="Party">
          Party
        </option>

        <option value="Office">
          Office
        </option>
      </select>

      <input
        placeholder="Budget"
        value={budget}
        onChange={(e) =>
          setBudget(
            e.target.value
          )
        }
      />
    </div>
  );
}

export default FilterBar;