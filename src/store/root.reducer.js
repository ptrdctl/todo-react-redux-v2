import { combineReducers } from "redux";
import { tasksReducer } from './tasks/tasks.reducer';
import { sortsReducer } from './sorts/sorts.reduces'

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  sorts: sortsReducer,
})




