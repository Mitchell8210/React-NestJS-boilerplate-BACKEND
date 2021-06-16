import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
  } from 'typeorm';
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // auth0 id if using auth0
    @Column({ type: 'varchar', nullable: true, unique: true })
    external_id: string;

    @Column({nullable: true})
    name: string;


    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;



  }