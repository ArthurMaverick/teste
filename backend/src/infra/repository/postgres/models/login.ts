import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity('login')
export class Login {
  @PrimaryColumn({ type: 'varchar' })
  id!: string

  @Column({ type: 'varchar' })
  email!: string

  @Column({ type: 'varchar' })
  discordId!: string

  // @CreateDateColumn({default: 'now()'})
  // createdAt!: Date
}
