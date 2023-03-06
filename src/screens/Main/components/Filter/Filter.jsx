import { Radio, Label } from '../../../../uiElems';

export function Filter({ chooseFilter, filter }) {
  const allHandler = (e) => {
    if (e.target.checked) chooseFilter('showAll');
  };
  const activeHandler = (e) => {
    if (e.target.checked) chooseFilter('showActive');
  };
  const completedHandler = (e) => {
    if (e.target.checked) chooseFilter('showCompleted');
  };

  const radios = [
    { id: 'showAll', handler: allHandler, text: 'Show all' },
    { id: 'showActive', handler: activeHandler, text: 'Active' },
    { id: 'showCompleted', handler: completedHandler, text: 'Completed' },
  ];

  return (
    <div>
      {radios.map((radio) => (
        <span key={radio.id}>
          <Radio
            key={radio.id}
            name="filter"
            id={radio.id}
            onChange={radio.handler}
            checked={radio.id === filter}
          />
          <Label htmlFor={radio.id}>
            {radio.text}
          </Label>
        </span>
      ))}
    </div>
  );
}
