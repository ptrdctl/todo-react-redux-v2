import { useDispatch } from 'react-redux';
import { Button } from '../../../../uiElems';
import { clearAll } from '../../../../store';

export function ClearButton({ children }) {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(clearAll());
  };

  return <Button onPointerDown={handler}>{children}</Button>;
}
