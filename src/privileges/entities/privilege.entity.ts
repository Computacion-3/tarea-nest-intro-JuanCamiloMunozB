import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('privileges')
export class Privilege {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Role, (role) => role.privileges, { cascade: true })
  @JoinTable({
    name: 'roles_privileges', // nombre de la tabla intermedia
    joinColumn: { name: 'privilege_id', referencedColumnName: 'id' }, // columna que referencia a Privilege
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' }, // columna que referencia a Role
  })
  roles: Role[];
}
