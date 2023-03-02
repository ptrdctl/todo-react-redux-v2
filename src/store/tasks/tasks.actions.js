export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function completeTodo(id, completed) {
  return {
    type: COMPLETE_TODO,
    id,
    completed
  }
}
