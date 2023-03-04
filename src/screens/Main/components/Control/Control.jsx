import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../../../store";

import { Input, Button } from "../../../../uiElems";
import { Filter } from "../Filter/Filter";
import { SortCheckbox } from "../SortCheckbox/SortCheckbox";

export function Control({toggleSort, sort, chooseFilter, filter}){

  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSubmit = (e) => {
    const trimmedValue = value.trim();
    if ((e.code === 'Enter' || e.type === 'pointerdown') && trimmedValue) {
      dispatch(addTodo(trimmedValue));
      setValue('');
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
    if(value.trim()){
      setTyping(true);
    } else {
      setTyping(false);
    }
  }

  return (
    <div>
      <Filter chooseFilter={chooseFilter} filter={filter}/>
      <span>Recent first</span>
      <SortCheckbox
        toggleSort={toggleSort}
        checked={sort}
      />
      <Input
        value={value}
        autoFocus={true}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      {typing &&
        <Button
          onPointerDown={handleSubmit}
        >
          +
        </Button>
      }
    </div>
  )
}

