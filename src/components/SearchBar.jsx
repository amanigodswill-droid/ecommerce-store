function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;