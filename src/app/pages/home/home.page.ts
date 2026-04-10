import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular/standalone';
import { QUIZ_CATEGORIES, QuizCategory } from '../../models/categories.model';
import { DIFFICULTIES, Difficulty } from '../../models/difficulty.model';
import { Router } from '@angular/router';
import { AMOUNTS, Amount } from '../../models/amount.model';
import { TriviaService } from 'src/app/services/trivia.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonButton],
})
export class HomePage {
  categories = QUIZ_CATEGORIES;
  selectedCategory: QuizCategory | null = null;

  difficulties = DIFFICULTIES;
  selectedDifficulty: Difficulty | null = null;

  amounts = AMOUNTS;
  selectedAmount: Amount | null = null;

  selectCategory(category: QuizCategory) {
    this.selectedCategory = category;
  }
  selectDifficulty(difficulty: Difficulty) {  
    this.selectedDifficulty = difficulty;
  }
  selectAmount(amount: Amount) {
    this.selectedAmount = amount;
  }
  constructor(private router: Router, private triviaService: TriviaService) {}

  startQuiz() {
  this.triviaService.fetchQuestions(this.selectedCategory!.id, this.selectedDifficulty!.id, this.selectedAmount!.id)
    .subscribe({
      next: (data: any) => {
       this.router.navigate(['/quiz'], { 
        state: { questions: data.results } 
  });
},
      error: (err) => {
        console.log('Something went wrong', err);
      }
    });
}
  
}
