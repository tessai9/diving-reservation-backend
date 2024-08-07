import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ShopUser } from './ShopUser';
import { UserLicense } from './UserLicense';
import { Participant } from './Participant';

enum UserRole {
  ADMINISTRATOR = 'administrator',
  STAFF = 'staff',
  CUSTOMER = 'customer'
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column({nullable: false})
  name: string

  @Column({nullable: false, unique: true})
  email: string

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole

  @Column({ type: process.env.NODE_ENV == 'production' ? 'timestamp' : 'datetime'})
  hiddenAt: Date

  @Column({ type: process.env.NODE_ENV == 'production' ? 'timestamp' : 'datetime', default: new Date()})
  createdAt: Date

  @OneToMany(() => ShopUser, shopUser => shopUser.user)
  shopUsers: ShopUser[]

  @OneToMany(() => UserLicense, userLicense => userLicense.user)
  userLicenses: UserLicense[]

  @OneToMany(() => Participant, participant => participant.user)
  participants: Participant[]
}
