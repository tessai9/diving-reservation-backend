import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ShopUser } from './ShopUser';

@Entity()
export class Shop extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  name: string

  @OneToMany(() => ShopUser, shopUser => shopUser.shop)
  shopUsers: ShopUser[]
}
