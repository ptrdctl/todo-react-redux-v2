import { useState } from "react";
import { useDispatch } from "react-redux";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Radio } from "../Radio/Radio";

import { addTodo } from '../../store';

export function Control({toggleSort, chooseFilter}){

  const [value, setValue] = useState('');
  const [typing, setTyping] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const trimmedValue = value.trim()
    if (e.code === 'Enter' && trimmedValue) {
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
      <Radio chooseFilter={chooseFilter}/>
      <span>Recent first</span>
      <SortCheckbox toggleSort={toggleSort}/>
      <Input
        type={'text'}
        value={value}
        autoFocus={true}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      {typing && <Button />}
    </div>
  )
}

function SortCheckbox({toggleSort}){
  const handleChange = (e) => {
    const toggled = e.target.checked;
    toggleSort(toggled);
  }

  return(
    <Input
      type={'checkbox'}
      onChange={handleChange}
    />
  )
}
