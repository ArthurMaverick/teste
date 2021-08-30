import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity('login')
export class Login {
  @PrimaryColumn({ type: 'varchar' })
  id!: string

  @Column({ type: 'varchar' })
  discordId!: string

  @Column({ type: 'varchar' })
  access_token!: string

  @Column({ type: 'varchar' })
  token_type!: string
}
