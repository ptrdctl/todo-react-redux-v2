export function Radio({chooseFilter}) {

  const allHandler = (e) => {e.target.checked && chooseFilter('showAll')};
  const activeHandler = (e) => {e.target.checked && chooseFilter('showActive')};
  const completedHandler = (e) => {e.target.checked && chooseFilter('showCompleted')};

  return(
    <div>
      <input type="radio" name='filter' id='showall' onChange={allHandler}/>
      <label htmlFor="showall">Show all</label>

      <input type="radio" name='filter' id='active' onChange={activeHandler}/>
      <label htmlFor="active">Active</label>

      <input type="radio" name='filter' id='completed' onChange={completedHandler}/>
      <label htmlFor="completed">Completed</label>
    </div>
  )
}