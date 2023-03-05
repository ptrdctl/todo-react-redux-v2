import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './root.reducer';

export { addTodo, completeTodo, clearAll } from './tasks/tasks.actions';
export { getTasks, getRecentTasks } from './tasks/tasks.selectors';

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
