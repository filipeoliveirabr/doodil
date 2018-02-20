import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {

  public getQuestions(): Array<Object> {
    return [
      { title: 'Pergunta 1?', type: 'checkbox', options: ['Resp A', 'Resp B', 'Resp C'] },
      { title: 'Pergunta 2?', type: 'radio',    options: ['Resp A', 'Resp B', 'Resp C'] },
      { title: 'Pergunta 3?', type: 'checkbox', options: ['Resp A', 'Resp B', 'Resp C'] }
    ];
  }
}