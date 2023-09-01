import Table from "./components/Table";
import MultipleForm from "./components/MultipleForm";
import TableDatas from "./components/TableDatas";

import { useState } from "react";

function App() {
  const [languageName, setLanguageName] = useState("");
  const [lonchYear, setLonchYear] = useState("");
  const [languageUse, setLanguageUse] = useState("");
  const [languageFull_form, setLanguageFull_form] = useState("");
  const [filterInput, setFilterInput] = useState("");

  const [getTableDatas, setGetTableDatas] = useState(TableDatas);

  const filterTableData = (index) => {
    const filterData = TableDatas.filter((item) => {
      return item.language.toLowerCase().includes(index);
    });

    console.log(filterData);

    setGetTableDatas(filterData);
  };

  const fillTableData = (index) => {
    setLanguageName(index.language);
    setLonchYear(index.year);
    setLanguageUse(index.languageUse);
    setLanguageFull_form(index.full_form);

    setGetTableDatas(TableDatas);

    setFilterInput("");
  };

  return (
    <>
      <div className="container">
        <MultipleForm
          languageName={languageName}
          lonchYear={lonchYear}
          languageUse={languageUse}
          languageFull_form={languageFull_form}
          setLanguageName={setLanguageName}
          setLonchYear={setLonchYear}
          setLanguageUse={setLanguageUse}
          setLanguageFull_form={setLanguageFull_form}
          setFilterInput={setFilterInput}
        />

        <Table
          onAddTableData={fillTableData}
          filterInput={filterInput}
          setFilterInput={setFilterInput}
          getTableDatas={getTableDatas}
          filterTableData={filterTableData}
          TableDatas={TableDatas}
        />
      </div>
    </>
  );
}

export default App;
