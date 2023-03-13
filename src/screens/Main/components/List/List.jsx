import Container from 'react-bootstrap/Container';

import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import { getTasks, getRecentTasks } from '../../../../store';
import { Task } from '../Task/Task';

function setToLocalStorage(key, payload) {
  const value = JSON.stringify(payload);
  localStorage.setItem(key, value);
}

export function List({ sort, filter }) {
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

  return (
    <Container fluid>
      <ListGroup variant="flush">
        {taskListForRendering.map((task) => (
          <Task
            key={task.id}
            task={task}
            filter={filter}
          />
        ))}
      </ListGroup>
    </Container>
  );
}
