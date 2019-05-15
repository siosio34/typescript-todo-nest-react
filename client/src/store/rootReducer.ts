import { combineReducers } from 'redux';
import todosReducer from './todo/todo.reducer';

const rootReducer = combineReducers({
    todos: todosReducer,
})

export default rootReducer;
