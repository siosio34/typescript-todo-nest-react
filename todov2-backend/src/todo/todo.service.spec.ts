import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { TodoEntity } from './todo.entity';
import { TodoModule } from './todo.module';
import { TypeOrmModule, getConnectionToken, getRepositoryToken } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';
import { INestApplication } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';

describe('TodoService', () => {
  let service: TodoService;
  let app: INestApplication;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.load(path.resolve(__dirname, '../', 'config', '*.ts')),
        TypeOrmModule.forRootAsync({
          useFactory: (config: ConfigService) => config.get('database'),
          inject: [ConfigService],
        }),
        TodoModule,
      ],
    }).compile();
    
    app = await module.createNestApplication();
    
    service = module.get<TodoService>(TodoService);
    console.log('service', service);
  });
  

  it('findAlls todo', async () => {
    const todos = await service.findAll({});
    console.log('todos', todos);
    expect(todos).toEqual({todos: [], count: 0});
  })

  afterAll(async () => app.close());
});
