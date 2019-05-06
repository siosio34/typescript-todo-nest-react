import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule, getConnectionToken, getRepositoryToken } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';
import { INestApplication } from '@nestjs/common';
import { UpdateResult, DeleteResult, Connection } from 'typeorm';
import { TodoService } from './todo.service';
import { TodoModule } from './todo.module';
import { TodosRO } from './todo.interface';
import { TodoEntity } from './todo.entity';

describe('TodoService', () => {
  let service: TodoService;
  let app: INestApplication;
  let module: TestingModule
  let todo: TodoEntity;
  
  beforeEach(async () => {
    module = await Test.createTestingModule({
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
    await app.init();
    
    service = module.get<TodoService>(TodoService);
  });
  
  it('create todo', async () => {
    const createTodoData = {
      title: "todo title1"
    };
    
    todo = await service.create(createTodoData);
    expect(todo).toBeInstanceOf(TodoEntity);
  })
  
  it('update todo', async () => {
    todo.title = "wow";
    const updatedResult = await service.update(todo);
    expect(updatedResult).toBeInstanceOf(UpdateResult);
  })
  
  it('delete todo', async () => {
    const deletedResult = await service.delete(todo.id);
    expect(deletedResult).toBeInstanceOf(DeleteResult);
  })
  
  it('findAlls todo', async () => {
    const result = await service.findAll({});
    expect(result.todos).toBeInstanceOf(Array);
    expect(typeof result.count).toBe('number');
  })

  afterAll(async done => {
    const connection = module.get<Connection>(getConnectionToken('default'));
    await connection.query('TRUNCATE todo');
    app.close();
    done();
  });
});
