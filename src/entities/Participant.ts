import { BaseEntity, Entity, ManyToOne } from 'typeorm';
import { User } from './User';
import { Tour } from './Tour';

@Entity()
export class Participant extends BaseEntity {
  @ManyToOne(() => User, user => user.participants)
  user: User

  @ManyToOne(() => Tour, tour => tour.participants)
  tour: Tour
}
