import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../../../store';

import { Input, Button } from '../../../../uiElems';
import { Filter } from '../Filter/Filter';
import { SortCheckbox } from '../SortCheckbox/SortCheckbox';
import { ClearButton } from '../ClearButton/ClearButton';

export function Control({
  toggleSort, sort, chooseFilter, filter,
}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSubmit = (e) => {
    const trimmedValue = value.trim();
    if ((e.code === 'Enter' || e.type === 'pointerdown') && trimmedValue) {
      dispatch(addTodo(trimmedValue));

      setValue('');
      setTyping(false);
    }
  };

  const handleChange = (e) => {
    const inputed = e.target.value;
    setValue(inputed);
    if (inputed.trim()) {
      setTyping(true);
    } else {
      setTyping(false);
    }
  };

  return (
    <div>
      <Filter chooseFilter={chooseFilter} filter={filter} />
      <ClearButton>Clear all</ClearButton>
      <span>Recent first</span>
      <SortCheckbox toggleSort={toggleSort} checked={sort} />
      <Input
        value={value}
        autoFocus
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      {typing && <Button onPointerDown={handleSubmit}>+</Button>}
    </div>
  );
}
