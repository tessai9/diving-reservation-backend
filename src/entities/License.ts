import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Organization } from './Organization';
import { UserLicense } from './UserLicense';

@Entity()
export class License extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  name: string

  @ManyToOne(() => Organization, organization => organization.licenses)
  organization: Organization

  @OneToMany(() => UserLicense, userLicense => userLicense.license)
  userLicenses: UserLicense[]
}
