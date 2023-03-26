import { useDispatch } from 'react-redux';
import { clearAll } from '../../../../store';
import { StyledClearButton } from './ClearButton.styles';

export function ClearButton({ children }) {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(clearAll());
  };

  return (
    <StyledClearButton
      variant="outline-danger"
      onPointerDown={handler}
    >
      {children}
    </StyledClearButton>
  );
}
