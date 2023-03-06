import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getTasks, getRecentTasks, completeTodo } from '../../../../store';
import { Checkbox } from '../../../../uiElems';

export function List({ sort, filter }) {
  const tasks = useSelector(getTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const dispatch = useDispatch();
  const recentTasks = useSelector(getRecentTasks);

  const sortedTasksList = sort ? recentTasks : tasks;
  const filteredTasksList = (() => {
    switch (filter) {
      case 'showActive': return sortedTasksList.filter((task) => !task.completed);
      case 'showCompleted': return sortedTasksList.filter((task) => task.completed);
      default: return sortedTasksList;
    }
  })();

  const handleCompleteTask = (e) => {
    dispatch(completeTodo(e.target.id, e.target.checked));
  };

  return (
    <div>
      {filteredTasksList.map((task) => (
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
