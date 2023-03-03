import {useDispatch, useSelector} from "react-redux";
import { getTasks, getRecentTasks, completeTodo } from "../../store";

export function List({sort, filter}){

  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const recentTasks = useSelector(getRecentTasks);
  const tasksList = (sort) ? recentTasks : tasks;
  const filteredTasksList = (filter === 'showActive') ? (tasksList.filter(task => !task.completed)) :
    ((filter === 'showCompleted') ? (tasksList.filter(task => task.completed)) : tasksList);

  const handleCompleteTask = (e) => {
    const id = e.target.id;
    const completed = e.target.checked;
    dispatch(completeTodo(id, completed))
  }

  return(
      <div>
      {
        filteredTasksList.map(task => {
          return(
            <div key={task.id}>
              <span>{task.date.toLocaleString()}</span>
              <span>{task.text}</span>
              <Checkbox
                id={task.id}
                onChange={handleCompleteTask}
                checked={task.completed}
              />
            </div>
          )
        })}
      </div>
  )
}

const Checkbox = ({id, onChange, checked}) => {
  return(
    <input
      type="checkbox"
      id={id}
      onChange={onChange}
      checked={checked}
    />
  )
}