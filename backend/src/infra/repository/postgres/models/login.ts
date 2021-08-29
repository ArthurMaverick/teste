import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Subscriber } from './subscriber'

@Entity('login')
export class Login {
  @PrimaryColumn({ type: 'varchar' })
  id!: string

  @OneToOne(() => Subscriber, subscriber => subscriber.login)
  @JoinColumn()
  subscriber: Subscriber;

  @Column({ type: 'varchar' })
  email!: string

  @Column({ type: 'varchar' })
  discordId!: string
}
