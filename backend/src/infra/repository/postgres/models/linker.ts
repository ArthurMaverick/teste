import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Login } from './login'

@Entity('linker')
export class Linker {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  email!: string;

  @OneToOne(() => Login, { eager: true, nullable: true })
  @JoinColumn()
  login: Login;
}
