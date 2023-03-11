import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Control, List } from './components';

export function Main() {
  const [sort, setSort] = useState(false);
  const toggleSort = (toggled) => {
    setSort(toggled);
  };
  const [filter, setFilter] = useState('showAll');
  const chooseFilter = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <Container fluid>
      <Control
        toggleSort={toggleSort}
        sort={sort}
        chooseFilter={chooseFilter}
        filter={filter}
      />
      <List sort={sort} filter={filter} />
    </Container>
  );
}
