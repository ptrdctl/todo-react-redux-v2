import { StyledToggleButton } from './SortToggle.styles';

export function SortToggle({ toggleSort, checked }) {
  const handleChange = (e) => {
    const toggled = e.target.checked;
    toggleSort(toggled);
  };

  return (
    <StyledToggleButton
      id="sort-toggle"
      value="1"
      type="checkbox"
      variant="outline-primary"
      onChange={handleChange}
      checked={checked}
    >
      Recent first
    </StyledToggleButton>
  );
}
