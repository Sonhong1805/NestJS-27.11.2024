import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionsRepository: Repository<Question>,
    @InjectRepository(Quiz)
    private quizzesRepository: Repository<Quiz>,
  ) {}

  async create(quizId: number, createQuestionDto: CreateQuestionDto) {
    const quiz = await this.quizzesRepository.findOneBy({ id: quizId });
    const newQuiz = await this.questionsRepository.create({
      ...createQuestionDto,
      quiz,
    });
    return await this.questionsRepository.save(newQuiz);
  }

  async findAll() {
    return await this.questionsRepository.find();
  }

  async findOne(id: number) {
    return await this.questionsRepository.findOne({ where: { id: id } });
  }

  async findByQuizId(quizId: number) {
    return await this.questionsRepository.find({
      where: { quiz: { id: quizId } },
      relations: ['quiz'],
    });

    //https://github.com/typeorm/typeorm/issues/4396
  }
}
