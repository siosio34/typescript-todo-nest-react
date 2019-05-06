import {Get, Post, Body, Put, Delete, Query, Param, Controller, NotFoundException} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    
    constructor(private readonly todoService: TodoService) {}
    
    @Get()
    async findAll(@Query() query) {
        return await this.todoService.findAll(query);
    }
    
    @Post()
    async create(@Body('todo') createtodo) {
        return await this.todoService.create(createtodo);
    }
    
    @Put()
    async update(@Param('id') id, @Body('todo') body) {
        // return await this.todoService.update(id, updatedTodo);
        
        const todo = await this.todoService.findById(id);
        
        if(!todo) {
            throw new NotFoundException();
        }
        
        return await this.todoService.update({
            ...todo,
            ...body
        })
    }
    
    @Delete()
    async delete(@Param('id') id) {
        return await this.todoService.delete(id);
    }
}
