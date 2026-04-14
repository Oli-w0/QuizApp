import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, CommonModule, IonItem, IonLabel],
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage {
    questions: any[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { questions: any[] };
    if (state && state.questions) {
      this.questions = state.questions;
    } else {
      console.error('No questions data found in navigation state');
    }
  }

  showQuestionDetails(question: any) {
    alert(`Question: ${question.question}\nYour Answer: ${question.userAnswer}\nCorrect Answer: ${question.correct_answer}`);
  }
}
