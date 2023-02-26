import { useSelector } from "react-redux";

export function List(){

  const tasks = useSelector(state => state.tasks);

  return(
    <ul>{tasks.map(todo => {
      return <li key={todo.id}>{todo.text}</li>
    })}</ul>
  );
}