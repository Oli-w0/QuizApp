import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { QUIZ_CATEGORIES, QuizCategory } from '../../models/categories.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class HomePage {
  categories = QUIZ_CATEGORIES;
  selectedCategory: QuizCategory | null = null;

  selectCategory(category: QuizCategory) {
    this.selectedCategory = category;
  }
  
}
