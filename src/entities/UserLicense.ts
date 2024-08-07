import { BaseEntity, Entity, ManyToOne } from 'typeorm';
import { User } from './User';
import { License } from './License';

@Entity()
export class UserLicense extends BaseEntity {
  @ManyToOne(() => User, user => user.userLicenses)
  user: User

  @ManyToOne(() => License, license => license.userLicenses)
  license: License
}
