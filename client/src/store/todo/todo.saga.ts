import { TodoApi } from 'api';
import { TodoActionTypes } from './todo.type';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

function* getTodos(params: string) {
    console.log('dasdadsasadsad');
    try {
        const res = yield call(TodoApi.getTodos, params);
        yield put(TodoActionTypes.GET_TODO.SUCCESS, res);
    } catch(error) {
        yield put(TodoActionTypes.GET_TODO.FAILURE, error);
    }
}


function* postTodo() {
    console.log('zdadsadsadas');
    try {
        const res = yield call(TodoApi.postTodo, {});
        yield put(TodoActionTypes.POST_TODO.SUCCESS, res);
    } catch(error) {
        yield put(TodoActionTypes.POST_TODO.FAILURE, error);
    }
}

export const todosSaga = [
    takeLatest(TodoActionTypes.GET_TODO.request, getTodos),
    takeLatest(TodoActionTypes.POST_TODO.request, postTodo)
]

