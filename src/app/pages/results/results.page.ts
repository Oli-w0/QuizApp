import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonBackButton } from "@ionic/angular/standalone";
import { Router } from "@angular/router";

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
  
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as any;
    this.score = state.score;
    this.total = state.total;
  }
  goHome() {
  this.router.navigate(['/tabs/home']);
}
}