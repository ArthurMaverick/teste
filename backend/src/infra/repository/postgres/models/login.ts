import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Subscriber } from './subscriber'

@Entity('login')
export class Login {
  @PrimaryColumn({ type: 'varchar' })
  id!: string

  @OneToOne(() => Subscriber, subscriber => subscriber.login)
  @JoinColumn()
  subscriber: Subscriber;

  @Column({ type: 'varchar', nullable: true })
  email?: string

  @Column({ type: 'varchar' })
  discordId!: string

  @Column({ type: 'varchar' })
  access_token!: string

  @Column({ type: 'varchar' })
  token_type!: string
}
