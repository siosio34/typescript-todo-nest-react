import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { getTodos, postTodo, putTodo, deleteTodo } from './todo.action';
import { Todo } from './todo.type';

export const isLoading = createReducer(false as boolean)
    .handleAction([getTodos.request, postTodo.request, putTodo.request, deleteTodo.request], (state, action) => true)
    .handleAction([getTodos.success, getTodos.failure, postTodo.success, postTodo.failure], (state, action) => false)

export const todos = createReducer([] as Todo[])
    .handleAction(getTodos.success, (state, action) => action.payload)

const todosReducer = combineReducers({
    isLoading,
    todos
})

export default todosReducer;
export type TodoState = ReturnType<typeof todosReducer>;
