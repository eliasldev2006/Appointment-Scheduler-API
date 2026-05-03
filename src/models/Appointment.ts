import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn 
} from 'typeorm';

@Entity('appointments')
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id!: string; // O "!" remove o erro de inicialização

  @Column('timestamp with time zone')
  date!: Date;

  @Column()
  time!: string;

  @Column()
  customerId!: string;

  @Column()
  providerId!: string;

  @Column()
  service!: string;

  @Column({
    type: 'enum',
    enum: ['scheduled', 'completed', 'canceled'],
    default: 'scheduled',
  })
  status!: 'scheduled' | 'completed' | 'canceled';

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}