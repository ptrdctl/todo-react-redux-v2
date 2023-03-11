import { useDispatch } from 'react-redux';
import { Button } from '../../../../shared';
import { clearAll } from '../../../../store';

export function ClearButton({ children }) {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(clearAll());
  };

  return <Button onPointerDown={handler}>{children}</Button>;
}
