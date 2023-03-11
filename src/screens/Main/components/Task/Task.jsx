import { useDispatch } from 'react-redux';

import Col from 'react-bootstrap/Col';

import { completeTodo } from '../../../../store';
import { Checkbox } from '../../../../shared';
import { StyledRow, StyledTask, StyledText } from './Task.styles';

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
        <Col xs="auto"><span>{new Date(task.date).toLocaleString()}</span></Col>
        <Col><StyledText>{task.text}</StyledText></Col>
        <Col xs="auto">
          <Checkbox
            id={task.id}
            onChange={handleCompleteTask}
            checked={task.completed}
          />
        </Col>
      </StyledRow>
    </StyledTask>
  );
}
