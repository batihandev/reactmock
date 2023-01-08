import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import ProductTable from "./components/productTable/ProductTable";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setStockOnly] = useState(false);
  React.useEffect(() => {
    fetch("http://localhost:3001/apia")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  if (!data) {
    return null;
  }

  function handleFilterTextChange(filterText) {
    setFilterText(filterText);
  }
  function handleInStockChange(inStockOnly) {
    setStockOnly(inStockOnly);
  }

  return (
    <div>
      <SearchBar
        products={data}
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={data}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default App;
