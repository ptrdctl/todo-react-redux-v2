import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { addTodo } from '../../../../store';

import { Filter } from '../Filter/Filter';
import { ClearButton } from '../ClearButton/ClearButton';
import { SortToggle } from '../SortToggle/SortToggle';
import { StyledControl, StyledControlElems } from './Control.styles';

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
      <StyledControlElems xs="auto"><Filter chooseFilter={chooseFilter} filter={filter} /></StyledControlElems>
      <StyledControlElems xs="auto">
        <SortToggle
          toggleSort={toggleSort}
          checked={sort}
        />
      </StyledControlElems>
      <StyledControlElems xs="auto"><ClearButton>Clear all</ClearButton></StyledControlElems>
      <InputGroup as={StyledControlElems}>
        <Form.Control
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleSubmit}
        />
        {typing ? <Button variant="outline-primary" onPointerDown={handleSubmit}>+</Button> : null}
      </InputGroup>
    </StyledControl>
  );
}
