import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonBackButton } from "@ionic/angular/standalone";
import { Router } from "@angular/router";
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
  standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonButton, IonButtons, IonBackButton],
})
export class ResultsPage {
  
score: number = 0;
total: number = 0;
category: string = '';
difficulty: string = '';
questions: any[] = [];
  
  constructor(private router: Router, private storageService: StorageService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as any;
    this.score = state.score;
    this.total = state.total;
    this.category = state.category;
    this.difficulty = state.difficulty; 
    this.questions = state.questions;
    this.storageService.init();
    this.saveResult();
  }
  goHome() {
  this.router.navigate(['/tabs/home']);
}

async saveResult() {
 await this.storageService.saveQuizResult({
  score: this.score,
  total: this.total,
  date: new Date().toLocaleDateString(),
  category: this.category,
  difficulty: this.difficulty,
  questions: this.questions
});
}
}