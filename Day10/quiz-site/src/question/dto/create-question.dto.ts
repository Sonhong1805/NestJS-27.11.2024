import { Quiz } from 'src/quiz/entities/quiz.entity';

export class CreateQuestionDto {
  quiz: Quiz;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  answer: string;
}
