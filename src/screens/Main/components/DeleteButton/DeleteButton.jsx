import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../../store/tasks/tasks.actions';
import { StyledDeleteButton } from './DeleteButton.styles';

export function DeleteButton({ id }) {
  const dispatch = useDispatch();
  const handler = () => dispatch(deleteTodo(id));

  return <StyledDeleteButton onPointerDown={handler} />;
}
