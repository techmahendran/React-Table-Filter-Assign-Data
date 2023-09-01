const FilterTable = ({ filterInput, setFilterInput, filterTableData }) => {
  const changeFilterInput = (e) => {
    setFilterInput(e.target.value);
    filterTableData(e.target.value);
  };

  return (
    <>
      <form>
        <div className="filterInput">
          <label>Search Data</label>

          <input
            type="text"
            id="lname"
            autoComplete="off"
            name="lastname"
            placeholder="Search Data..."
            value={filterInput}
            onChange={changeFilterInput}
          />
        </div>
      </form>
    </>
  );
};

export default FilterTable;
