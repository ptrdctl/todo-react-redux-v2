import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { clearAll } from '../../../../store';

export function ClearButton({ children }) {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(clearAll());
  };

  return (
    <Button
      variant="outline-danger"
      onPointerDown={handler}
    >
      {children}
    </Button>
  );
}
