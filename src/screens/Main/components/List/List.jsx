import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';

import { getTasks, getRecentTasks, completeTodo } from '../../../../store';
import { Checkbox } from '../../../../uiElems';

function setToLocalStorage(key, payload) {
  const value = JSON.stringify(payload);
  localStorage.setItem(key, value);
}

export function List({ sort, filter }) {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const recentTasks = useSelector(getRecentTasks);
  const sortedTasksList = sort ? recentTasks : tasks;

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

  const handleCompleteTask = (e) => {
    dispatch(completeTodo(e.target.id, e.target.checked));
  };

  return (
    <div>
      {taskListForRendering.map((task) => (
        <div key={task.id}>
          <span>{new Date(task.date).toLocaleString()}</span>
          <span>{task.text}</span>
          <Checkbox
            id={task.id}
            onChange={handleCompleteTask}
            checked={task.completed}
          />
        </div>
      ))}
    </div>
  );
}
