import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionService } from 'src/question/question.service';
import { CreateQuestionDto } from 'src/question/dto/create-question.dto';
import { SubmissionAnswerService } from 'src/submission-answer/submission-answer.service';
import { CreateSubmissionAnswerDto } from 'src/submission-answer/dto/create-submission-answer.dto';
import { SubmissionService } from 'src/submission/submission.service';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizzesRepository: Repository<Quiz>,
    private questionsService: QuestionService,
    private submissionsService: SubmissionService,
    private submissionAnswerService: SubmissionAnswerService,
  ) {}

  async create(createQuizDto: CreateQuizDto) {
    const newQuiz = await this.quizzesRepository.create(createQuizDto);
    return await this.quizzesRepository.save(newQuiz);
  }

  async findAll() {
    return await this.quizzesRepository.find();
  }

  async createQuestion(quizId: number, createQuestionDto: CreateQuestionDto) {
    return await this.questionsService.create(quizId, createQuestionDto);
  }

  async getQuestion(quizId: number) {
    return await this.questionsService.findByQuizId(quizId);
  }

  async sendSubmission(
    quizId: number,
    createSubmissionAnswerDto: CreateSubmissionAnswerDto,
  ) {
    return await this.submissionAnswerService.create(
      quizId,
      createSubmissionAnswerDto,
    );
  }

  async getSubmission(quizId: number) {
    return this.submissionsService.findByQuizId(quizId);
  }
}
