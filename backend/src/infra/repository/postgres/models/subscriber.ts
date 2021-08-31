import { Linker } from './linker'
import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne } from 'typeorm'

@Entity('subscriber')
export class Subscriber {
  @PrimaryColumn()
  id!: string

  @Column()
  email!: string

  @Column()
  birthData!: string

  @Column()
  state!: string

  @Column()
  city!: string

  @OneToOne(() => Linker, { eager: true, nullable: true })
  @JoinColumn()
  linker: Linker
}
