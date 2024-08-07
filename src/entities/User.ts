import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

enum UserRole {
  ADMINISTRATOR = 'administrator',
  STAFF = 'staff',
  CUSTOMER = 'customer'
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column({ type: 'enum', enum: UserRole , default: UserRole.CUSTOMER })
  role: UserRole

  @Column({ type: process.env.NODE_ENV == 'production' ? 'timestamp' : 'datetime'})
  hiddenAt: Date

  @Column({ type: process.env.NODE_ENV == 'production' ? 'timestamp' : 'datetime', default: new Date()})
  createdAt: Date
}
