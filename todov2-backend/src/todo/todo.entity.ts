import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, MaxLength } from 'class-validator';

@Entity({ name: 'todo' })
export class TodoEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    title: string;

    @Column({ default: false })
    isfinished: boolean;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    created: Date;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    updated: Date;
}
