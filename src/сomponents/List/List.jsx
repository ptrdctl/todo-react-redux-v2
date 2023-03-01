import { useSelector } from "react-redux";
import { getTasks, getRecentTasks } from "../../store";

export function List({sort}){

  const tasks = useSelector(getTasks);
  const recentTasks = useSelector(getRecentTasks);
  let preparedRenederingList = tasks;
  if(sort) preparedRenederingList = recentTasks

  return(
      <div>
      {
        preparedRenederingList.map(task => {
          return(
            <div key={task.id}>
              <span>{task.date.toLocaleString()}</span>
              <span>{task.text}</span>
              <input type="checkbox"/>
            </div>
          )
        })}
      </div>
  )
}