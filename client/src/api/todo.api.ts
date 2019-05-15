import { RequestApi } from 'utils';

const getTodos = (query: any) => {
    return RequestApi.get('/api/todo');
}

const postTodo = (body: any) => {
    return RequestApi.post('/api/todo');
}

const updateTodo = () => {
    return RequestApi.put('/api/todo');
}

const deleteTodo = () => {
    return RequestApi.delete('/api/todo')
}

export default {
    getTodos,
    postTodo,
    updateTodo,
    deleteTodo
}