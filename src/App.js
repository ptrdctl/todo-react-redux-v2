import './App.css';
import { useState } from "react";
import { Control } from "./сomponents/Control/Control";
import { List } from "./сomponents/List/List";

function App() {

  const [sort, setSort] = useState(false);

  const toggleSort = (toggled) => { setSort(toggled) }

  return (
    <>
      <Control toggleSort={toggleSort}/>
      <List sort={sort}/>
    </>
  );
}

export default App;
