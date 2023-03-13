import ToggleButton from 'react-bootstrap/ToggleButton';

export function SortToggle({ toggleSort, checked }) {
  const handleChange = (e) => {
    const toggled = e.target.checked;
    toggleSort(toggled);
  };

  return (
    <ToggleButton
      id="sort-toggle"
      value="1"
      type="checkbox"
      variant="outline-primary"
      onChange={handleChange}
      checked={checked}
    >
      Recent first
    </ToggleButton>
  );
}
