import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'
import { Login } from './login'

@Entity('subscriber')
export class Subscriber {
  @PrimaryColumn({ type: 'varchar' })
  id!: string

  @OneToOne(() => Login, login => login.subscriber)
  login: Login;

  @Column({ type: 'varchar' })
  email!: string

  @Column({ type: 'varchar' })
  birthData!: string

  @Column({ type: 'varchar' })
  state!: string

  @Column({ type: 'varchar' })
  city!: string

  // @CreateDateColumn({default: 'now()'})
  // createdAt!: Date
}
