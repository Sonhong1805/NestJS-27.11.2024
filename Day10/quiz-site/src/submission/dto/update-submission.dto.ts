import { Quiz } from 'src/quiz/entities/quiz.entity';

export class UpdateSubmissionDto {
  quiz: Quiz;
  username: string;
  score: number;
}
