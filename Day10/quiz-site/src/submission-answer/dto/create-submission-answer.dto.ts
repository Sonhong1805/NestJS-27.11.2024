interface Answer {
  question_id: number;
  answer: string;
}

export class CreateSubmissionAnswerDto {
  username: string;
  answers: Answer[];
}
