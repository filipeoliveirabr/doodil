import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  private questions: Array<Object>;
  private current_index: number;

  constructor(private questionService: QuestionService) {}

  next(){
    if(this.current_index < (this.questions.length - 1)){
      this.current_index = this.current_index + 1;
    }
  }

  prev(){
    if(this.current_index > 0){
      this.current_index--;
    }
  }

  ngOnInit() {
    this.questions     = this.questionService.getQuestions();
    this.current_index = 0;
  }

}
