import { Checkbox } from "../../../../uiElems";

export function SortCheckbox({toggleSort}){

  const handleChange = (e) => {
    const toggled = e.target.checked;
    toggleSort(toggled);
  }

  return(
    <Checkbox onChange={handleChange}/>
  )
}