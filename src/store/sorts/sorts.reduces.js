
import {RECENT_FIRST} from "./sorts.actions";

const initialState = {recentFirst: false};

export function sortsReducer(state = initialState, action){
  switch(action.type){
    case RECENT_FIRST: {
      return{
        ...state,
        recentFirst: action.toggled
      }
    }
    default:
      return state;
  }
}