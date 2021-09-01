import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('linker')
export class Linker {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  email!: string;
}
