import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn()
  releaseDate: Date;

  @Column()
  genre: string;

  @ManyToOne(() => User, (user) => user.games, { eager: true })
  createdBy: User;
}
