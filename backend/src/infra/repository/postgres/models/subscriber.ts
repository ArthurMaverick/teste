import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity('subscriber')
export class Subscriber {
  @PrimaryColumn({ type: 'varchar' })
  id!: string

  @Column({ type: 'varchar' })
  email!: string

  @Column({ type: 'varchar' })
  birthData!: string

  @Column({ type: 'varchar' })
  state!: string

  @Column({ type: 'varchar' })
  city!: string
}
