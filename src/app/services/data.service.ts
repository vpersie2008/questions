import {Injectable} from '@angular/core';
import {Question} from '../models/Question';

@Injectable()
export class DataService {

  questions : Question[];
  constructor() {
    this.questions = [
      {
        text: "你叫什么名字？",
        answer: "Jerry",
        isHide: true
      }, {
        text: "你的爱好是？",
        answer: "你猜",
        isHide: true
      }, {
        text: "你最喜欢的运动是",
        answer: "足球",
        isHide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }
}
