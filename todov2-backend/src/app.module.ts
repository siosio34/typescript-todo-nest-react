import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { AppController } from './app.controller';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '*.{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    TodoModule,
  ],
  controllers: [AppController]
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}