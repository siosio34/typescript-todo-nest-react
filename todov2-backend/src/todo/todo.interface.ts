import { TodoEntity } from './todo.entity';

export interface TodosRO {
    todos: TodoEntity[];
    count: number;
}