import { useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';

import { completeTodo } from '../../../../store';

import {
  StyledCol, StyledRow, StyledTask, StyledText,
} from './Task.styles';
import { DeleteButton } from '../DeleteButton/DeleteButton';

export function Task({ task, filter }) {
  const dispatch = useDispatch();
  const handleCompleteTask = (e) => {
    dispatch(completeTodo(e.target.id, e.target.checked));
  };

  return (
    <StyledTask
      completed={task.completed}
      filter={filter}
    >
      <StyledRow>
        <StyledCol xs="auto"><DeleteButton id={task.id} /></StyledCol>
        <StyledCol xs="auto">
          <span>{new Date(task.date).toLocaleString()}</span>
        </StyledCol>
        <StyledCol><StyledText>{task.text}</StyledText></StyledCol>
        <StyledCol xs="auto">
          <Form.Check
            type="checkbox"
            id={task.id}
            onChange={handleCompleteTask}
            checked={task.completed}
          />
        </StyledCol>
      </StyledRow>
    </StyledTask>
  );
}
