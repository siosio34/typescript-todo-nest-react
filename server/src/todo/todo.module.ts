import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoEntity } from './todo.entity';
import { ConfigModule } from 'nestjs-config';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
