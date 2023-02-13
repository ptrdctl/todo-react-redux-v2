import { nanoid } from 'nanoid';
const initialState = {todos: []};

export function rootReducer(state = initialState, action){
  switch(action.type){
    case 'todos/todoAdded': {
      return {
        ...state, todos: [...state.todos, {id: nanoid(), text: action.payload, completed: false}]
      }
    }
    default:
      return state;
  }
}