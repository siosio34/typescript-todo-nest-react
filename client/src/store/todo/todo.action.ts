import { createAsyncAction } from 'typesafe-actions';
import { TodoActionTypes, Todo } from './todo.type';

export const getTodos = createAsyncAction(
    TodoActionTypes.GET_TODO.request,
    TodoActionTypes.GET_TODO.success,
    TodoActionTypes.GET_TODO.failure,
    )<string, Todo[], string>();
    
export const postTodo = createAsyncAction(
    TodoActionTypes.POST_TODO.request,
    TodoActionTypes.POST_TODO.success,
    TodoActionTypes.POST_TODO.failure,
    )<string, string, string>();
    
export const putTodo = createAsyncAction(
    TodoActionTypes.PUT_TODO.request,
    TodoActionTypes.PUT_TODO.success,
    TodoActionTypes.PUT_TODO.failure,
    )<string, string, string>();
    
export const deleteTodo = createAsyncAction(
    TodoActionTypes.DELETE_TODO.request,
    TodoActionTypes.DELETE_TODO.success,
    TodoActionTypes.DELETE_TODO.failure,
    )<string, string, string>();
    
