import { IsInt, IsString } from 'class-validator';

export class GetTodoDto {
    @IsInt()
    id?: number;
    
    @IsString()
    title?: string;
    
    @IsInt()
    limt?: number;
    
    @IsInt()
    offset?: number;
}