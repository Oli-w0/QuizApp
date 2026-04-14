import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, CommonModule],
})
export class SettingsPage {
  constructor(private router: Router, private storageService: StorageService) {
    this.storageService.init();
  }

  async clearHistory() {
    if (confirm('Are you sure you want to clear your quiz history? This action cannot be undone.')) {
      await this.storageService.clearHistory();
      alert('Quiz history cleared!');
    }
  }
}
