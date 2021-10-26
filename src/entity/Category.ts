import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, MaxLength } from 'class-validator';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty()
  @MaxLength(128)
  name!: string;
}
