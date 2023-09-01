import FilterTable from "./FilterTable";

const Table = ({
  onAddTableData,
  filterInput,
  setFilterInput,
  getTableDatas,
  filterTableData,
  TableDatas,
}) => {
  return (
    <>
      <FilterTable
        TableDatas={TableDatas}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
        filterTableData={filterTableData}
      />

      <div className="table-container">
        <h1>Language History</h1>
        <table>
          <thead>
            <tr>
              <th>Language</th>
              <th>Stable Release</th>
              <th>Use</th>
              <th>Invented Names</th>
            </tr>
          </thead>

          <tbody>
            {getTableDatas
              .filter((filterDatas) => {
                return filterDatas.language.toLowerCase().includes(filterInput);
              })
              .map((item, index) => {
                return (
                  <tr key={index} onClick={() => onAddTableData(item)}>
                    <td>{item.language}</td>
                    <td>{item.year}</td>
                    <td>{item.languageUse}</td>
                    <td>{item.full_form}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {getTableDatas.length === 0 && <p className="empty">No Filter Datas</p>}
      </div>
    </>
  );
};

export default Table;
