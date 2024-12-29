import { Quiz } from 'src/quiz/entities/quiz.entity';

export class CreateSubmissionDto {
  quiz: Quiz;
  username: string;
  score: number;
}
