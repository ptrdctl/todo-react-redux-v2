import { useDispatch } from 'react-redux';

import { completeTodo } from '../../../../store';

import {
  StyledCheckbox,
  StyledTask,
  StyledDate,
  StyledText,
} from './Task.styles';
import { DeleteButton } from '../DeleteButton/DeleteButton';

export function Task({
  task, filter, handleDateClick, isShortViewDate,
}) {
  const dispatch = useDispatch();
  const handleCompleteTask = (e) => {
    dispatch(completeTodo(e.target.id, e.target.checked));
  };

  return (
    <StyledTask
      completed={task.completed ? 1 : 0}
      filter={filter}
    >
      <DeleteButton id={task.id} />
      <StyledDate
        onPointerDown={handleDateClick}
        isShortViewDate={isShortViewDate}
      >
        {isShortViewDate ? new Date(task.date).toLocaleString()
          : new Date(task.date).toLocaleTimeString('eu-EU', { timeStyle: 'short' })}
      </StyledDate>
      <StyledText>{task.text}</StyledText>
      <StyledCheckbox
        type="checkbox"
        id={task.id}
        onChange={handleCompleteTask}
        checked={task.completed}
      />
    </StyledTask>
  );
}
