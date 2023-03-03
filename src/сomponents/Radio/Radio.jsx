export function Radio({chooseFilter, filter}) {

  const allHandler = (e) => {e.target.checked && chooseFilter('showAll')};
  const activeHandler = (e) => {e.target.checked && chooseFilter('showActive')};
  const completedHandler = (e) => {e.target.checked && chooseFilter('showCompleted')};

  const radios = [
    {id: 'showAll', handler: allHandler, text: 'Show all'},
    {id: 'showActive', handler: activeHandler, text: 'Active'},
    {id: 'showCompleted', handler: completedHandler, text: 'Completed'}
  ]

  return(
    <div>
      {radios.map((radio, index) => {
        return(
          <span key={radio.id}>
            <input key={radio.id} type="radio" name='filter' id={radio.id} onChange={radio.handler} checked={radio.id === filter}/>
            <label key={radio.id + index} htmlFor={radio.id}>{radio.text}</label>
          </span>
        )
      })}
    </div>
  )
}
