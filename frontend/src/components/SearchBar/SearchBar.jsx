function SearchBar({
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={
        placeholder
      }
      style={{
        width: "100%",
        padding: "12px",
        border:
          "1px solid #ddd",
        borderRadius:
          "10px",
        marginBottom:
          "20px",
      }}
    />
  );
}

export default SearchBar;