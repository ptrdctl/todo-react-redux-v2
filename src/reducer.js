import { nanoid } from 'nanoid';
const initialState = [];

function getId(){
  const id = nanoid();
  return id;
}

export function rootReducer(state = initialState, action){
  switch(action.type){
    case 'todos/todoAdded': {
      return {
        ...state, {id: getId(), text: action.payload, completed: false}
      }
    }
    default:
      return state;
  }
}