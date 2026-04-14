import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonButtons, IonBackButton],
})
export class QuizPage {
  questions: any[] = [];
  currentIndex: number = 0;
  shuffledAnswers: string[] = [];
  selectedAnswer: string | null = null;
  score: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as any;
    if (state?.questions) {
  this.questions = state.questions;
  this.loadQuestion();
}
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  getShuffledQuestions() {
    const answers = [
    ...this.getCurrentQuestion().incorrect_answers,
    this.getCurrentQuestion().correct_answer
    ]
    return answers.sort(() => Math.random() - 0.5);
  }
  loadQuestion() {
  const answers = [
    ...this.getCurrentQuestion().incorrect_answers,
    this.getCurrentQuestion().correct_answer
  ];
  this.shuffledAnswers = answers.sort(() => Math.random() - 0.5);
}
  selectAnswer(answer: string) {
  this.selectedAnswer = answer;
  if (answer === this.getCurrentQuestion().correct_answer) {
    this.score++;
  }
}
  getAnswerColor(answer: string) {
    if (!this.selectedAnswer) return '';
    if (answer === this.getCurrentQuestion().correct_answer) return 'correct';
    if (answer === this.selectedAnswer) return 'incorrect';
    return '';
  }
  nextQuestion() {
  this.selectedAnswer = null;
  if (this.currentIndex < this.questions.length - 1) {
    this.currentIndex++;
    this.loadQuestion();
  } else {
    this.router.navigate(['/results'], { 
      state: { 
        score: this.score, 
        total: this.questions.length,
        category: this.questions[0].category,
        difficulty: this.questions[0].difficulty,
        questions: this.questions
      } 
    });
  }
}

}