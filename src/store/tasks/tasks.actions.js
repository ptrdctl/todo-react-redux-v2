export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const CLEAR_ALL = 'CLEAR_ALL';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function completeTodo(id, completed) {
  return {
    type: COMPLETE_TODO,
    id,
    completed,
  };
}

export function clearAll() {
  return {
    type: CLEAR_ALL,
  };
}
