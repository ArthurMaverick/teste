import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity('subscriber')
export class Subscriber {
  @PrimaryColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  birthData!: string

  @Column()
  state!: string

  @Column()
  city!: string

  @Column({ nullable: true })
  discordId?: string
}
