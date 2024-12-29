import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionModule } from 'src/question/question.module';
import { SubmissionAnswerModule } from 'src/submission-answer/submission-answer.module';
import { SubmissionModule } from 'src/submission/submission.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quiz]),
    QuestionModule,
    SubmissionModule,
    SubmissionAnswerModule,
  ],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
