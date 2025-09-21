import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  min_players: number;

  @Column()
  max_players: number;

  @Column()
  category: string;

  @ManyToOne(() => User, (user) => user.games, { eager: true })
  createdBy: User;
}
