import { useSelector } from "react-redux";
const selectTodos = state => state.todos;

export function List(){

  const todos = useSelector(selectTodos);
  const renderedList = todos.map(todo => {
    return <li key={todo.id}>{todo.text}</li>
  })

  return(
    <ul>{renderedList}</ul>
  );
}