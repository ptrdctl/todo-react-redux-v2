import { useSelector } from "react-redux";
import { getTasks } from "../../store";
import { getSorts} from "../../store";

export function List(){

  const tasks = useSelector(getTasks);
  const sorts = useSelector(getSorts);

  return(
      <div>
      { (sorts.recentFirst) ? (
        [...tasks].sort((a, b) => +b.date - +a.date).map(task => {
          return(
            <div key={task.id}>
              <span>{task.date.toLocaleString()}</span>
              <span>{task.text}</span>
              <input type="checkbox"/>
            </div>
          )})
        ) : (
        tasks.map(task => {
          return(
            <div key={task.id}>
              <span>{task.date.toLocaleString()}</span>
              <span>{task.text}</span>
              <input type="checkbox"/>
            </div>
          )
        })
        )}
      </div>

  )







}