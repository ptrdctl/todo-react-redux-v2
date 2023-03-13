import CloseButton from 'react-bootstrap/CloseButton';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../../store/tasks/tasks.actions';

export function DeleteButton({ id }) {
  const dispatch = useDispatch();
  const handler = () => dispatch(deleteTodo(id));

  return <CloseButton onPointerDown={handler} />;
}
