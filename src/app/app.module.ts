import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionComponent } from './components/question/question.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {DataService} from '../app/services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
