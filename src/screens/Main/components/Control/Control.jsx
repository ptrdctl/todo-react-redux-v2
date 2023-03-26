import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { addTodo } from '../../../../store';

import { Filter } from '../Filter/Filter';
import { ClearButton } from '../ClearButton/ClearButton';
import { SortToggle } from '../SortToggle/SortToggle';
import { StyledControl, StyledInput } from './Control.styles';

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
    <StyledControl>
      <Filter
        chooseFilter={chooseFilter}
        filter={filter}
      />
      <SortToggle
        toggleSort={toggleSort}
        checked={sort}
      />
      <ClearButton>Clear all</ClearButton>
      <StyledInput>
        <Form.Control
          type="text"
          placeholder="Type а task"
          value={value}
          onChange={handleChange}
          onKeyDown={handleSubmit}
        />
        {typing ? <Button variant="outline-primary" onPointerDown={handleSubmit}>+</Button> : null}
      </StyledInput>
    </StyledControl>
  );
}
