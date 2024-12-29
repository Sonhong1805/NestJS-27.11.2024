import { PartialType } from '@nestjs/mapped-types';
import { CreateSubmissionAnswerDto } from './create-submission-answer.dto';

export class UpdateSubmissionAnswerDto extends PartialType(CreateSubmissionAnswerDto) {}
