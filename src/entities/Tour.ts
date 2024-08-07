import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Participant } from './Participant';

enum Status {
  DTAFT = 'draft',
  PUBLISHED = 'published',
}

@Entity()
export class Tour extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  title: string

  @Column({ type: 'text', nullable: false })
  tourComment: string

  @Column({ type: Date, nullable: false })
  tourFromDate: Date

  @Column({ type: Date, nullable: false })
  tourToDate: Date

  @Column({ nullable: false, enum: Status, default: Status.DTAFT })
  status: Status

  @Column({ type: 'integer', nullable: false })
  participantsNumber: number

  @OneToMany(() => Participant, Participant => Participant.tour)
  participants: Participant[]
}
