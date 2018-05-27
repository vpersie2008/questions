import {Injectable} from '@angular/core';
import {Question} from '../models/Question';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';

@Injectable()
export class DataService {

  questions : Question[];
  constructor() {
    // this.questions = [
    //   {
    //     text: "你叫什么名字？",
    //     answer: "Jerry",
    //     isHide: true
    //   }, {
    //     text: "你的爱好是？",
    //     answer: "你猜",
    //     isHide: true
    //   }, {
    //     text: "你最喜欢的运动是",
    //     answer: "足球",
    //     isHide: true
    //   }
    // ];
  }

  getQuestions() {
    if (localStorage.getItem("questions") == null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem("questions"));
    }

    return this.questions;
  }

  addQuestion(question : Question) {
    this.questions.unshift(question);
    localStorage.setItem("questions", JSON.stringify(this.questions));
  }

  removeQuestion(question : Question) {

    for (let index = 0; index < this.questions.length; index++) {
      if (this.questions[index] == question) {
        this.questions.splice(index, 1);
      }

    }

    localStorage.setItem("questions", JSON.stringify(this.questions));
  }
}
