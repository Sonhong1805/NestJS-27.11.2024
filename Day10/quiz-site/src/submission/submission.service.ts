import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Submission } from './entities/submission.entity';
import { Repository } from 'typeorm';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { UpdateSubmissionDto } from './dto/update-submission.dto';

@Injectable()
export class SubmissionService {
  constructor(
    @InjectRepository(Submission)
    private submissionsRepository: Repository<Submission>,
    @InjectRepository(Quiz)
    private quizzesRepository: Repository<Quiz>,
  ) {}

  async create(quizId: number, username: string) {
    const quiz = await this.quizzesRepository.findOneBy({ id: quizId });
    const newSubmission = await this.submissionsRepository.create({
      quiz,
      username,
      score: 0,
    });
    return await this.submissionsRepository.save(newSubmission);
  }

  async findOne(id: number) {
    return await this.submissionsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, boby: UpdateSubmissionDto) {
    const submission = await this.submissionsRepository.findOne({
      where: { id: id },
    });
    const updateUser = {
      ...submission,
      ...boby,
    };
    return await this.submissionsRepository.save(updateUser);
  }

  async findByQuizId(quizId: number) {
    const quiz = await this.quizzesRepository.findOneBy({ id: quizId });
    return await this.submissionsRepository.find({
      where: { quiz },
    });
  }
}
