import { IsString } from 'class-validator';

export class CreateTodoDto {
    @IsString()
    readonly title: string;
}