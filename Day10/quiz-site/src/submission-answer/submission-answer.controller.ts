import { Controller, Get } from '@nestjs/common';
import { SubmissionAnswerService } from './submission-answer.service';

@Controller('submission-answer')
export class SubmissionAnswerController {
  constructor(
    private readonly submissionAnswerService: SubmissionAnswerService,
  ) {}

  @Get()
  findAll() {
    return this.submissionAnswerService.findAll();
  }
}
