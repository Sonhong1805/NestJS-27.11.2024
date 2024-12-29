import { Quiz } from 'src/quiz/entities/quiz.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Quiz, (Quiz) => Quiz.id, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'quizId' })
  quiz: Quiz;

  //https://stackoverflow.com/questions/68556933/typeorm-insert-foreign-key-by-string

  @Column()
  option_a: string;

  @Column()
  option_b: string;

  @Column()
  option_c: string;

  @Column()
  option_d: string;

  @Column()
  answer: string;
}
