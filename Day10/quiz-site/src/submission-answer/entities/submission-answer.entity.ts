import { Question } from 'src/question/entities/question.entity';
import { Submission } from 'src/submission/entities/submission.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class SubmissionAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Submission, (Submission) => Submission.id, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  submission: Submission;

  @ManyToOne(() => Question, (Question) => Question.id, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  question: Question;

  @Column({ type: 'boolean', default: true })
  is_correct: boolean;
}
