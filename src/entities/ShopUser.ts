import { BaseEntity, Entity, ManyToOne } from 'typeorm';
import { Shop } from './Shop';
import { User } from './User';

@Entity()
export class ShopUser extends BaseEntity {
  @ManyToOne(() => Shop, shop => shop.shopUsers)
  shop: Shop

  @ManyToOne(() => User, user => user.shopUsers)
  user: User
}
