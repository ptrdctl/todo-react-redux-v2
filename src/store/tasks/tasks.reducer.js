import { nanoid } from 'nanoid';
import { ADD_TODO, COMPLETE_TODO, CLEAR_ALL } from './tasks.actions';

const initialState = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const addTodoNewState = [
        ...state,
        {
          id: nanoid(),
          text: action.text,
          completed: false,
          date: Date.now(),
        },
      ];
      localStorage.tasks = JSON.stringify(addTodoNewState);
      return addTodoNewState;

    case COMPLETE_TODO:
      const completeTodoNewState = state.map((task) => (task.id === action.id
        ? {
          ...task,
          completed: action.completed,
        }
        : task));
      localStorage.tasks = JSON.stringify(completeTodoNewState);
      return completeTodoNewState;

    case CLEAR_ALL:
      localStorage.tasks = JSON.stringify([]);
      return [];

    default:
      return state;
  }
}
