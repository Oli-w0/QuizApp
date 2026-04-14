import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class HistoryPage {

  history: any[] = [];


  async loadHistory() {
    this.history = await this.storageService.getHistory();
    console.log('Loaded history:', this.history);
  }

  showQuestionDetails(entry: any) {
    this.router.navigate(['/review'], { state: { questions: entry.questions } });
  }

  constructor(private router: Router, private storageService: StorageService) {
    this.storageService.init() ;
    this.loadHistory();
  }

}
