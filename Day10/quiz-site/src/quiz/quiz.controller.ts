import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { CreateQuestionDto } from 'src/question/dto/create-question.dto';
import { CreateSubmissionAnswerDto } from 'src/submission-answer/dto/create-submission-answer.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  findAll() {
    return this.quizService.findAll();
  }

  @Post(':quizId/questions')
  createQuestion(
    @Param('quizId') quizId: string,
    @Body() createQuestionDto: CreateQuestionDto,
  ) {
    return this.quizService.createQuestion(+quizId, createQuestionDto);
  }

  @Get(':quizId/questions')
  getQuestion(@Param('quizId') quizId: string) {
    return this.quizService.getQuestion(+quizId);
  }

  @Post(':quizId/submissions')
  sendSubmission(
    @Param('quizId') quizId: string,
    @Body() createSubmissionAnswerDto: CreateSubmissionAnswerDto,
  ) {
    return this.quizService.sendSubmission(+quizId, createSubmissionAnswerDto);
  }

  @Get(':quizId/submissions')
  getSubmission(@Param('quizId') quizId: string) {
    return this.quizService.getSubmission(+quizId);
  }
}
