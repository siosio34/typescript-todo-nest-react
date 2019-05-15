import { ActionHelper } from 'utils'; 

export interface Todo {
    id: number;
    title: string;
    isFinished: boolean;
    create_dt: Date;
    update_dt: Date;
}

export interface TodoState {
    todoItems: Todo[];
    loading: boolean;
    errors: undefined;
}

export const TodoActionTypes: any = {
    GET_TODO: ActionHelper.makeAsyncActionTypes('@todo', 'get'),
    POST_TODO: ActionHelper.makeAsyncActionTypes('@todo', 'post'),
    PUT_TODO: ActionHelper.makeAsyncActionTypes('@todo', 'put'),
    DELETE_TODO: ActionHelper.makeAsyncActionTypes('@todo', 'delete'),
}


// TodoActionTypes.GET_TODO.REQUEST
// TodoActionTypes.POST_TODO.REQUEST







