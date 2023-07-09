import { BaseEntity, Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    public Username: string;

    @Column()
    public Password: string;
    
    @CreateDateColumn()
    public createdAt: Date;
}