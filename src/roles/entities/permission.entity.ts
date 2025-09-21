import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolePermission } from './role-permission.entity';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(
    () => RolePermission,
    (rolePermission) => rolePermission.permission,
  )
  rolePermissions: RolePermission[];

  // Mapear una relación usando ManyToMany. Util si no queremos que la tabla intermedia no tenga mas columnas
  // @ManyToMany(() => Role, (role) => role.permissions, { cascade: true })
  // @JoinTable({
  //   name: 'roles_permissions', // nombre de la tabla intermedia
  //   joinColumn: { name: 'permission_id', referencedColumnName: 'id' }, // columna que referencia a permission
  //   inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' }, // columna que referencia a Role
  // })
  // roles: Role[];
}
