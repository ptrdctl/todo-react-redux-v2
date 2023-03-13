import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useMemo } from 'react';

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

  const buttonVariant = useMemo(() => {
    switch (filter) {
      case 'showActive': return 'outline-success';
      case 'showCompleted': return 'outline-secondary';
      default: return 'outline-primary';
    }
  }, [filter]);

  const radios = [
    { id: 'showAll', handler: allHandler, text: 'Show all' },
    { id: 'showActive', handler: activeHandler, text: 'Active' },
    { id: 'showCompleted', handler: completedHandler, text: 'Completed' },
  ];

  return (
    <ButtonGroup>
      {radios.map((radio) => (
        <ToggleButton
          type="radio"
          variant={buttonVariant}
          key={radio.id}
          name="filter"
          id={radio.id}
          onChange={radio.handler}
          checked={radio.id === filter}
          value={radio.id}
        >
          {radio.text}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}
