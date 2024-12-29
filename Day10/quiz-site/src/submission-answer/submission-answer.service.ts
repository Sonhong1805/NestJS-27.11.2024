import { QuestionService } from 'src/question/question.service';
import { Injectable } from '@nestjs/common';
import { CreateSubmissionAnswerDto } from './dto/create-submission-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SubmissionAnswer } from './entities/submission-answer.entity';
import { Repository } from 'typeorm';
import { SubmissionService } from 'src/submission/submission.service';

@Injectable()
export class SubmissionAnswerService {
  constructor(
    @InjectRepository(SubmissionAnswer)
    private SubmissionAnswerRepository: Repository<SubmissionAnswer>,
    private submissionService: SubmissionService,
    private questionService: QuestionService,
  ) {}
  async create(
    quizId: number,
    createSubmissionAnswerDto: CreateSubmissionAnswerDto,
  ) {
    const { username, answers } = createSubmissionAnswerDto;
    const newSubmission = await this.submissionService.create(quizId, username);

    let sum_answer_correct = 0;

    await Promise.all(
      answers.map(async (item) => {
        const question = await this.questionService.findOne(item.question_id);
        const result = await this.SubmissionAnswerRepository.create({
          submission: newSubmission,
          question: question,
          is_correct: question.answer === item.answer,
        });
        await this.SubmissionAnswerRepository.save(result);

        if (result.is_correct) {
          sum_answer_correct++;
        }
      }),
    );

    const newCurrentSubmission = {
      ...newSubmission,
      score: sum_answer_correct,
    };

    return await this.submissionService.update(
      newSubmission.id,
      newCurrentSubmission,
    );
  }

  async findAll() {
    return await this.SubmissionAnswerRepository.find({
      relations: ['question', 'submission'],
    });
  }
}
