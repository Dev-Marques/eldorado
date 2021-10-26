import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsInt, MaxLength, IsAlpha, IsPositive } from 'class-validator';
import { Category } from './Category';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Category, { eager: true, cascade: ['insert'], nullable: false })
  category!: Category;

  @Column()
  @IsAlpha()
  @MaxLength(16)
  color!: string;

  @Column()
  @IsInt()
  @IsPositive()
  partNumber!: number;
}
