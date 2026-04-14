import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class HistoryPage {

  history: any[] = [];


  async loadHistory() {
    this.history = await this.storageService.getHistory();
    console.log('Loaded history:', this.history);
  }
  constructor(private Router: Router, private storageService: StorageService) {
    this.storageService.init() ;
    this.loadHistory();
  }

}
