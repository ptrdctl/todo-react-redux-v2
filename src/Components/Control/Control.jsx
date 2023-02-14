import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export function Control(){

  const [value, setValue] = useState('');
  const [typing, setTyping] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const trimmedValue = value.trim()
    if (e.code === 'Enter' && trimmedValue) {
      dispatch({ type: 'todos/todoAdded', payload: trimmedValue });
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
      <Input
        value={value}
        autoFocus={true}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      {typing && <Button />}
    </div>
  )
}