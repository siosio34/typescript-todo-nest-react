import {Get, Post, Body, Put, Delete, Query, Param, Controller} from '@nestjs/common';
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
    async update(@Param('id') id, @Body('todo') updateTodo) {
        return await this.todoService.update(id, updateTodo);
    }
    
    @Delete()
    async delete(@Param('id') id) {
        return await this.todoService.delete(id);
    }
}
