import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { TodoEntity } from './todo.entity';

import { TodosRO } from './todo.interface';
import { GetTodoDto, CreateTodoDto, UpdateTodoDto } from './dto';

@Injectable()
export class TodoService {
    
    constructor(
        @InjectRepository(TodoEntity)
        private readonly todoRepository: Repository<TodoEntity>
        ) {}
        
    async findAll(query): Promise<TodosRO> {
        const queryBuilder = await getRepository(TodoEntity)
        .createQueryBuilder('todo');
        
        if ('title' in query) {
            queryBuilder.andWhere("todo.title LIKE :title", {title: '%${query.title}% }'});
        }
        
        queryBuilder.orderBy('todo.created', 'DESC');
        
        const todosCount = await queryBuilder.getCount();
        const todos = await queryBuilder.getMany();
        
        return { todos, count: todosCount };
    }
    
    async create(todoData: CreateTodoDto): Promise<TodoEntity> {
        const newTodo = new TodoEntity();
        newTodo.title = todoData.title;
        
        await this.todoRepository.save(newTodo);
        return newTodo;
    }
    
    async update(id: number, todoData: UpdateTodoDto): Promise<TodoEntity> {
        let updatedTodo = new TodoEntity();
        updatedTodo.title = todoData.title;
        
        await this.todoRepository.save(updatedTodo);
        return updatedTodo;
    }
    
    async delete(id: number): Promise<DeleteResult> {
        return await this.todoRepository.delete({ id });
    }
    
}
