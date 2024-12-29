import { Module } from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { SubmissionController } from './submission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Submission } from './entities/submission.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Submission]),
    TypeOrmModule.forFeature([Quiz]),
  ],
  controllers: [SubmissionController],
  providers: [SubmissionService],
  exports: [SubmissionService],
})
export class SubmissionModule {}
