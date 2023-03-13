import { nanoid } from 'nanoid';
import {
  ADD_TODO, COMPLETE_TODO, CLEAR_ALL, DELETE_TODO,
} from './tasks.actions';

const initialState = JSON.parse(localStorage.getItem('tasks')) ?? [];

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nanoid(),
          text: action.text,
          completed: false,
          date: Date.now(),
        },
      ];

    case COMPLETE_TODO:
      return state.map((task) => (task.id === action.id
        ? {
          ...task,
          completed: action.completed,
        }
        : task));

    case CLEAR_ALL:
      return [];

    case DELETE_TODO:
      return state.filter((task) => (task.id !== action.id));

    default:
      return state;
  }
}
