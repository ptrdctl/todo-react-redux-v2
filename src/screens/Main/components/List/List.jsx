import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';

import { getTasks, getRecentTasks } from '../../../../store';
import { Task } from '../Task/Task';
import { StyledListGroup } from './List.styles';

function setToLocalStorage(key, payload) {
  const value = JSON.stringify(payload);
  localStorage.setItem(key, value);
}

export function List({ sort, filter }) {
  const tasks = useSelector(getTasks);
  const recentTasks = useSelector(getRecentTasks);
  const sortedTasksList = sort ? recentTasks : tasks;
  const [isShortViewDate, setShortViewDate] = useState(false);
  const handleDateClick = () => setShortViewDate(!isShortViewDate);

  useEffect(() => {
    setToLocalStorage('tasks', tasks);
  }, [tasks]);

  const taskListForRendering = useMemo(() => {
    switch (filter) {
      case 'showActive': return sortedTasksList.filter((task) => !task.completed);
      case 'showCompleted': return sortedTasksList.filter((task) => task.completed);
      default: return sortedTasksList;
    }
  }, [filter, sortedTasksList]);

  return (
    <StyledListGroup variant="flush">
      {taskListForRendering.map((task) => (
        <Task
          isShortViewDate={isShortViewDate}
          handleDateClick={handleDateClick}
          key={task.id}
          task={task}
          filter={filter}
        />
      ))}
    </StyledListGroup>
  );
}
