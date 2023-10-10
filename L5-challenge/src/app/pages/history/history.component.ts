import { Component, Input } from '@angular/core';
import { SearchHistory } from 'src/app/interfaces/SearchHistory';
import { Message } from 'primeng/api';
import { SearchStorageService } from 'src/app/services/search-storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass'],
})
export class HistoryComponent {
  searchHistory: SearchHistory[];
  messages: Message[];

  constructor(private searchStorageService: SearchStorageService) {
    this.messages = [{ severity: 'info', detail: 'Sem dados para exibição' }];
    this.searchHistory = this.searchStorageService.getStoredSearches();
  }

  ngOnInit() {
    this.searchStorageService.searchHistoryUpdated.subscribe(() => {
      this.searchHistory = this.searchStorageService.getStoredSearches();
    });
  }

  // Deleta item do histórico passado por parametro pelo ID
  deleteStoredSearchById(item: SearchHistory) {
    this.searchStorageService.deleteStoredSearchById(item);
    this.searchHistory = this.searchStorageService.getStoredSearches();
  }
}
