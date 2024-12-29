import { Module } from '@nestjs/common';
import { SubmissionAnswerService } from './submission-answer.service';
import { SubmissionAnswerController } from './submission-answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissionAnswer } from './entities/submission-answer.entity';
import { SubmissionModule } from 'src/submission/submission.module';
import { QuestionModule } from 'src/question/question.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubmissionAnswer]),
    SubmissionModule,
    QuestionModule,
  ],
  controllers: [SubmissionAnswerController],
  providers: [SubmissionAnswerService],
  exports: [SubmissionAnswerService],
})
export class SubmissionAnswerModule {}
