import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizModule } from './quiz/quiz.module';
import { QuestionModule } from './question/question.module';
import { Quiz } from './quiz/entities/quiz.entity';
import { Question } from './question/entities/question.entity';
import { SubmissionModule } from './submission/submission.module';
import { SubmissionAnswerModule } from './submission-answer/submission-answer.module';
import { Submission } from './submission/entities/submission.entity';
import { SubmissionAnswer } from './submission-answer/entities/submission-answer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql.freedb.tech',
      port: 3306,
      username: 'freedb_sonhong18052003',
      password: 'TA@JCP92p$2d%XN',
      database: 'freedb_TestNestjs',
      entities: [Quiz, Question, Submission, SubmissionAnswer],
      synchronize: true,
    }),
    QuizModule,
    QuestionModule,
    SubmissionModule,
    SubmissionAnswerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
