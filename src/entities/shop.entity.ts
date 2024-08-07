import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Shop {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  name: string
}
