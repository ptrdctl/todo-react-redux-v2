import './App.css';
import { useState } from "react";

import { Control } from "./сomponents/Control/Control";
import { List } from "./сomponents/List/List";

function App() {

  const [sort, setSort] = useState(false);
  const toggleSort = (toggled) => { setSort(toggled) };
  const [filter, setFilter] = useState('showAll');
  const chooseFilter = (filterValue) => { setFilter(filterValue)};

  return (
    <>
      <Control
        toggleSort={toggleSort}
        chooseFilter={chooseFilter}
        filter={filter}
      />

      <List
        sort={sort}
        filter={filter}
      />
    </>
  );
}

export default App;
