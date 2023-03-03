import {nanoid} from "nanoid";
import { ADD_TODO, COMPLETE_TODO } from "./tasks.actions";

const initialState = [];

export function tasksReducer(state = initialState, action){
  switch(action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          id: nanoid(),
          text: action.text,
          completed: false,
          date: new Date()
        }
      ]
    case COMPLETE_TODO:
      return state.map(task => task.id === action.id ? {...task, completed: action.completed} : task)
    default:
      return state;
  }
}
