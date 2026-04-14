import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) {}

  async init() {
    await this.storage.create();
  }

  async saveQuizResult(result: any) {
    const history = await this.getHistory();
    history.push(result);
    await this.storage.set('quiz_history', history);
  }

  async getHistory() {
    const history = await this.storage.get('quiz_history');
    return history ?? [];
  }

  async clearHistory() {
    await this.storage.remove('quiz_history');
  }
}